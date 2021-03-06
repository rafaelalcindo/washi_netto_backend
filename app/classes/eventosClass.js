var { PrepareQuery }     = require('./prepareQuery');
var { ModelDesbravador } = require('../models/modelDesbravador');

var dateTime = require('node-datetime');

exports.Eventos = class Eventos {
    constructor() {        
    }

    set idEventos(idEventos){ this._idEventos = idEventos }
    get idEventos(){ return this._idEventos }

    set titulo(titulo){ this._titulo = titulo }
    get titulo(){ return this._titulo }

    set descricao(descricao){ this._descricao = descricao }
    get descricao(){ return this._descricao }

    set data(data){ this._data = data }
    get data(){ return this._data }

    inserirEvento(connection, eventos,req, res) {
        let prepareQuery = new PrepareQuery();
        let queryMontada = prepareQuery.inserirEventos(eventos);
        let modelDesbravador = new ModelDesbravador(connection);

        modelDesbravador.salvar(queryMontada, (error, result) => {
            if(result) {
                res.send('[{"resultado": 1}]');
            } else {
                res.send('[{"resultado": 0}]');
            }
        });
    }

    ligarDesbravadorEventos(connection, idDesbravador, idEvento, req, res) {
        let prepareQuery = new PrepareQuery();
        let queryMontada = prepareQuery.ligarDesbravadorEvento(idEvento, idDesbravador);
        let modelDesbravador = new ModelDesbravador(connection);

        modelDesbravador.salvar(queryMontada, (error, result) => {
            if(result) {
                res.send('[{"resultado": 1}]');
            } else {
                res.send('[{"resultado": 0}]');
            }
        });
    }

    consultarEventosPorData(connection, req, res) {
        let prepareQuery = new PrepareQuery();
        let queryMontada = prepareQuery.listarEventosPorData();
        queryConsultar( connection,queryMontada,req, res);
    }

    consultarParticipantesDoEvento(connection, idEvento, req, res) {
        let prepareQuery = new PrepareQuery();
        let queryMontada = prepareQuery.listarQuemFoiEvento(idEvento);
        queryConsultar(connection, queryMontada, req, res);
    }

    consultarQuantidadeParticipanteEvento(connection, idEvento, req, res) {
        let prepareQuery = new PrepareQuery();
        let queryMontada = prepareQuery.listarTotalParticipantesEvento(idEvento);
        queryConsultar(connection, queryMontada, req, res);
    }

}
// ======================================================================================
//|                        Fim da Classe e começo dos Método Helper
//=======================================================================================

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