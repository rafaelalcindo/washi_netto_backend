module.exports = (app) => {
    app.post('/organizacao/eventos/inserir', (req, res)=> {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.eventosDesbravador.inserirEventos(app, req, res);
    });
}