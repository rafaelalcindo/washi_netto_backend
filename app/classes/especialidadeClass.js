var { PrepareQuery } = require('./prepareQuery');
var { ModelDesbravador } = require("../models/modelDesbravador");

var dateTime = require('node-datetime');

exports.Especialidades = class Especialidades {
    constructor(){        
    }

    set idDesbravador(idDesbravador){ this._idDesbravador = idDesbravador }
    get idDesbravador(){ return this._idDesbravador }

    set nome_especialidade(nome_especialidade){ this._nome_especialidade = nome_especialidade }
    get nome_especialidade(){ return this._nome_especialidade }

    set area(area) { this._area = area }
    get area(){ return this._area }

    set instrutor(instrutor){ this._instrutor =  instrutor }
    get instrutor(){ return this._instrutor }

    set conclusao(conclusao){ this._conclusao =  conclusao }
    get conclusao(){ return this._conclusao }

    set autor(autor){ this._autor = autor }
    get autor(){ return this._autor }

    set cadastrado(cadastrado){ this._cadastrado = cadastrado }
    get cadastrado() { return this._cadastrado }

    // =================================================================
    //                  Fim dos Getters e Setters
    //==============================================================

    inserirEspecialidade(connection, especialidade,req, res){
        let prepareQuery = new PrepareQuery();
        let queryMontada = prepareQuery.inserirEspecialidade( especialidade);
        let modelDesbravador = new ModelDesbravador(connection);
        
        
        modelDesbravador.salvar(queryMontada, (error, result) => {
            if(result){
                res.send('[{"resultado": 1}]');
            }else{
                res.send('[{"resultado": 0}]');
            }
        });
        
    }

}