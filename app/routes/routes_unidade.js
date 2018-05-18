module.exports = (app) => {
    app.post('/unidade/historico/pontuacao', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.unidadeDesbravador.cadastrarHistoricoUnidade(app, req, res)
    });
}