var { Unidade } = require('../classes/unidadeClass');

module.exports.cadastrarHistoricoUnidade = (app, req, res) => {
    let id_unidade    = req.body.id_unidade;
    let titulo        = req.body.titulo;
    let descricao     = req.body.descricao;
    let pontosGanhos  = req.body.pontosGanhos;
    
    let unidadeHistorico = new Unidade();
    unidadeHistorico.id_unidade   = id_unidade;
    unidadeHistorico.titulo       = titulo;
    unidadeHistorico.descricao    = descricao
    unidadeHistorico.pontosGanhos = pontosGanhos;

    let connection = app.config.dbConnection();
    

    unidadeHistorico.gravarHistoricoUnidade(connection, unidadeHistorico,req, res);
    
}