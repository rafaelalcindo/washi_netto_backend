var { Eventos } = require('../classes/eventosClass');

module.exports.inserirEventos = (app, req, res) => {
    let titulo    = req.body.titulo;
    let descricao = req.body.descricao;
    let data      = req.body.data;
    
    let eventos = new Eventos();
    eventos.titulo    = titulo;
    eventos.descricao = descricao;
    eventos.data      = data;

    let connection = app.config.dbConnection();

    eventos.inserirEvento(connection, eventos, req, res);
}

module.exports.ligarDesbravadorEventos = (app, req, res) => {
    let idEvento      = req.body.idEvento;
    let idDesbravador = req.body.idDesbravador;
    
    let eventos = new Eventos();

    let connection = app.config.dbConnection();

    eventos.ligarDesbravadorEventos(connection,idDesbravador, idEvento, req,res);

}

module.exports.consultarEventosPorData = (app, req, res) => {
    let eventos = new Eventos();
    let connection = app.config.dbConnection();
    eventos.consultarEventosPorData(connection,req,res);
}

module.exports.consultarParticipantesEvento = (app, req, res) => {
    let idEvento = req.body.idEvento;
    let eventos = new Eventos();
    let connection = app.config.dbConnection();
    eventos.consultarParticipantesDoEvento(connection, idEvento, req, res);
}

module.exports.consultarQuantidadeParticipanteEvento = (app, req, res) => {
    let idEvento = req.body.idEvento;
    let eventos  = new Eventos();
    let connection = app.config.dbConnection();
    eventos.consultarQuantidadeParticipanteEvento(connection, idEvento, req, res);
}