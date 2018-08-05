module.exports = (app) => {
    app.post('/unidade/historico/pontuacao', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.unidadeDesbravador.cadastrarHistoricoUnidade(app, req, res)
    });

    app.post('/unidades/inserir/equipamentos', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.unidadeDesbravador.inserirEquipamentosUnidade(app, req, res);
    });

    app.post('/unidades/pegar/info', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.unidadeDesbravador.pegarDadosUnidade(app, req, res);
    });
}