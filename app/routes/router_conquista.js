module.exports = (app) => {
    app.post('/conquista/especialidade/inserir', (req,res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.conquistaDesbravador.cadastrarEspecialidadeDesbravador(app, req, res);
    });
}