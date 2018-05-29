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