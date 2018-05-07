var { Desbravador } = require("../classes/desbravadorClass");
var { FichaMedica } = require("../classes/fichaMedicaClass")
var { Responsaveis } = require("../classes/responsavel");

module.exports.dadosPrincipaisPainelDesbravador =  (app, req, res) => {
    let id_debravador = req.body.id;

    console.log('id: ', id_debravador);

    let desbravador = new Desbravador();
    let connection  = app.config.dbConnection();

    desbravador.buscarDadosPainel(connection, id_debravador, req, res);

}
