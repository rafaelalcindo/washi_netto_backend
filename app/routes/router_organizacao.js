module.exports = (app) => {
    app.post('/organizacao/eventos/inserir', (req, res)=> {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.eventosDesbravador.inserirEventos(app, req, res);
    });

    app.get('/organizacao/eventos/consultar/todoseventos/pordata', (req,res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.eventosDesbravador.consultarEventosPorData(app, req, res);
    });

    app.post('/organizacao/eventos/consultar/participantes/evento', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.eventosDesbravador.consultarParticipantesEvento(app, req, res);
    });

    app.post('/organizacao/eventos/consultar/quantidade/participantes/evento', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.eventosDesbravador.consultarQuantidadeParticipanteEvento(app, req, res);
    });
}