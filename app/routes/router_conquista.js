module.exports = (app) => {
    app.post('/conquista/especialidade/inserir', (req,res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.conquistaDesbravador.cadastrarEspecialidadeDesbravador(app, req, res);
    });

    app.post('/conquista/especialidade/consulta/ano', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.conquistaDesbravador.consultarEspecialidadeDesbravadorAno(app, req, res);
    });

    app.post('/conquista/especialidade/consulta/total', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.conquistaDesbravador.consultarEspecialidadeDesbravadorTotal(app, req, res);
    });

    app.post('/conquista/especialidade/especialidade/lista', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.conquistaDesbravador.consultarEspecialidadeDesbravadorLista(app, req, res);
    });

    app.get('/conquista/especialidade/qtdTodosDesbrava', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.conquistaDesbravador.consultarQtdEspecialidadePorDesbravador(app, req, res);
    });
}