var { PrepareQuery } = require('./prepareQuery');
var { ModelDesbravador } = require("../models/modelDesbravador");

var dateTime  = require('node-datetime');

exports.Unidade = class Unidade {
    constructor(){        
    }

    set id_unidade(id_unidade){ this._id_unidade = id_unidade }
    get id_unidade(){ return this._id_unidade }

    set nome_unidade(nome_unidade){ this._nome_unidade = nome_unidade }
    get nome_unidade(){ return this._nome_unidade }

    set pontuacao_unidade(pontuacao_unidade){ this._pontuacao_unidade = pontuacao_unidade }
    get pontuacao_unidade(){ return this._pontuacao_unidade }

    set equipamentos(equipamentos){ this._equipamentos = equipamentos }
    get equipamentos(){ return this._equipamentos }

    //============== histórico ========================

    set titulo(titulo){ this._titulo = titulo }
    get titulo(){ return this._titulo }

    set descricao(descricao){ this._descricao = descricao }
    get descricao(){ return this._descricao }

    set pontosGanhos(pontosGanhos){ this._pontosGanhos = pontosGanhos }
    get pontosGanhos(){ return this._pontosGanhos }

    set data_conclusao(data_conclusao){ this._data_conclusao = data_conclusao }
    get data_conclusao(){ return this._data_conclusao }


    // Fim dos Getters e Setters

    gravarHistoricoUnidade(connection,historico ,req, res){
        let prepareQuery     = new PrepareQuery();
        let queryMontada     = prepareQuery.pegarpontosUnidade(historico.id_unidade);
        let modelDesbravador = new ModelDesbravador(connection);

        modelDesbravador.consultar(queryMontada, (error, result) => {
            if(error){
                console.log('error: ', error)
            }else{
                let pontos
                console.log(result);
                pontos = result[0].pontuacao_unidade;                
                pontos = parseInt(pontos) + parseInt( historico.pontosGanhos);
                
                let dt = dateTime.create();
                let formatted = dt.format('Y-m-d');                
                let querySalvarHistorico = prepareQuery.inserirPontuacaoUnidade(historico, formatted);
                
                modelDesbravador.salvar(querySalvarHistorico, (error, result) => {
                    if(result){
                        let atualizarPontosGeral = prepareQuery.atualizarPontuaçãoTotalUnidade(pontos, historico.id_unidade);
                        modelDesbravador.atualizar(atualizarPontosGeral, (error, result) => {
                            if(result){
                                res.send('[{"resultado": "1"}]');
                            } else {
                                res.send('[{"resultado": "0"}]');
                            }
                        })
                    } else {  res.send('[{"resultado": "0"}]')  }
                })

            }            
        })
    }// fim da função

    inserirEquipamentosUnidade(connection, idUnidade, equipamentos,req, res) {
        let prepareQuery = new PrepareQuery();
        let queryMontada = prepareQuery.inserirEquipamentosUnidade(idUnidade, equipamentos);
        queryAtualizar(connection, queryMontada, req, res);
    }

    pegarDadosUnidade(connection, idUnidade, req, res) {
        let prepareQuery = new PrepareQuery();
        let queryMontada = prepareQuery.pegarInfoUnidade(idUnidade);
        queryConsultar(connection, queryMontada, req, res);
    }

}

function queryAtualizar(connection, queryPreparada, req, res) {
    let modelDesbravador = new ModelDesbravador(connection);

    modelDesbravador.atualizar(queryPreparada, (error, result) => {
        if(result){
            res.send('[{"resultado": "1"}]');
        } else {
            res.send('[{"resultado": "0"}]');
        }
    })
}

function queryConsultar(connection, queryPreparada, req, res) {
    let modelDesbravador = new ModelDesbravador(connection);
    modelDesbravador.consultar(queryPreparada, (error, result) => {
        if(error) {
            res.send('[{"resultado": 0}]');
            //console.log('erro: ',error);
            return;
        } else if(result) {
            res.send(result);
        }
    });
}