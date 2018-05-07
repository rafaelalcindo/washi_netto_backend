var { PrepareQuery } = require("./prepareQuery");
var { ModelDesbravador } = require("../models/modelDesbravador")

exports.Desbravador =  class Desbravador {
    constructor(){        
    }

    set unidade(unidade){ this._unidade = unidade }
    get unidade(){ return this._unidade }

    set nome(nome){ this._nome = nome }
    get nome() { return this._nome }

    set sobrenome(sobrenome){ this._sobrenome = sobrenome }
    get sobrenome(){ return this._sobrenome }

    set cep(cep){ this._cep = cep }
    get cep(){ return this._cep }

    set endereco(endereco){ this._endereco = endereco }
    get endereco(){ return this._endereco }

    set complementar(complementar){ this._complementar = complementar }
    get complementar(){ return this._complementar }

    set estado(estado){ this._estado = estado }
    get estado(){ return this._estado }

    set cidade(cidade){ this._cidade = cidade }
    get cidade(){ return this._cidade }

    set ativo(ativo){ this._ativo = ativo }
    get ativo(){ return this._ativo }

    set login(login){ this._login = login }
    get login(){ return this._login }

    set senha(senha){ this._senha = senha }
    get senha(){ return this._senha }

    set data_nasc(data_nasc){ this._data_nasc = data_nasc }
    get data_nasc(){ return this._data_nasc }

    set cadastrado_por(cadastrado_por){ this._cadastrado_por = cadastrado_por }
    get cadastrado_por(){ return this._cadastrado_por }

    set rg_desbrava(rg_desbrava){ this._rg_desbrava = rg_desbrava }
    get rg_desbrava(){ return this._rg_desbrava }

    set orgao_espedicao(orgao_espedicao){ this._orgao_espedicao = orgao_espedicao }
    get orgao_espedicao(){ return this._orgao_espedicao }

    set estado_civil(estado_civil){ this._estado_civil = estado_civil }
    get estado_civil(){ return this._estado_civil }

    set tamanho_camisa(tamanho_camisa){ this._tamanho_camisa = tamanho_camisa }
    get tamanho_camisa(){ return this._tamanho_camisa }

    set cpf_desbravador(cpf_desbravador){ this._cpf_desbravador = cpf_desbravador }
    get cpf_desbravador(){ return this._cpf_desbravador }

    set data_cad_desbrava(data_cad){ this._data_cad = data_cad }
    get data_cad_desbrava(){ return this._data_cad }


    // fim dos Getters e Setters

    salvarDesbravador(connection, desbravador, fichaMedica, Responsaveis){
        let queryDesbravador = new PrepareQuery();
        let queryMontada     = queryDesbravador.salvarDesbravadorQuery(desbravador);
        let modelDesbravador = new ModelDesbravador(connection);
        var resultado = '';
        var erro = '';
        
        //console.log(queryMontada);

        modelDesbravador.salvar(queryMontada, function(error, result){
            let id_desbrava = result.insertId
            let queryFichaMedica = queryDesbravador.salvarFichaMedicaDesbravador(fichaMedica, result.insertId);
            modelDesbravador.salvar(queryFichaMedica, (error, result) => {
                
                let queryResponsaveis = queryDesbravador.salvarResponsaveisDesbravadores(Responsaveis, id_desbrava)
                modelDesbravador.salvar(queryResponsaveis, (error, result)=> {
                    let queryAguitosCoin = queryDesbravador.inserirAguitosCoin(id_desbrava);
                    modelDesbravador.salvar(queryAguitosCoin, (error, result) => {
                        console.log(error)
                        console.log(result)
                    })
                })
            });

        })
        
    }// ================================ fim Salvar Desbravador =============================

    logarDesbravador(connection, login, senha,req ,res){
        let queryLoginDesbrava  = new PrepareQuery();
        
        let queryMontada        = queryLoginDesbrava.verificarLoginQuery(login, senha);         
        let modelDesbravador    = new ModelDesbravador(connection);        
         modelDesbravador.consultar(queryMontada, (error, result) => {
             
             let resultado = JSON.parse(JSON.stringify(result));
             //console.log('error: ', error);
            if(error){
                res.send('[{}]');
                return;
            }
            /*console.log(resultado)
            console.log(resultado[0].nome)
            console.log(resultado.id) */
            if(result != ''){
                if(result[0].nivel == undefined){
                    res.send('[{}]');
                    return;
                }
            }
           

            req.session.autenticar = true;
            req.session.login      = login;
            req.session.senha      = senha;

            res.cookie('autenticar', true)
            res.cookie('login', login)
            res.cookie('senha', senha)

            res.send(result);
        
        })
    }

    autenticarDesbravador(connection, login, senha, req, res){
        let queryLoginDesbrava = new PrepareQuery();
        let queryMontada       = queryLoginDesbrava.verificarLoginQuery(login, senha);
        let modelDesbravador   = new ModelDesbravador(connection);

        modelDesbravador.consultar(queryMontada, (error, result) => {
            let resultado = JSON.parse(JSON.stringify(result));
            if(error){ res.send('[{}]'); return; }

            if(result[0].nivel == undefined){
                res.send('[{}]');
                return;
            }

            req.session.autenticar = true;
            req.session.login      = login;
            req.session.senha      = senha;

            res.cookie('autenticar', true)
            res.cookie('login', login)
            res.cookie('senha', senha)

            res.send(result);

        })
    }

    // =================== pegar dados Desbravador ==========

    buscarDadosPainel(connection, id, req, res){
        let prepareQuery = new PrepareQuery();
        let queryMontada = prepareQuery.buscarDadosDesbravadorPainelQuery(id);
        let modelDesbravador = new ModelDesbravador(connection);

        modelDesbravador.consultar(queryMontada, (error, result) => {
            if(error){ res.send('[{}]'); return; }

            if(result) {
                res.send(result);
            }
            
        })
    }

    
}