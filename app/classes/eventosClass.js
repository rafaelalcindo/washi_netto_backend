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

}