module.exports = (app) =>{
    app.post('/cadastrarDesbravador', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin','*')
        app.app.controllers.cadastrarDesbravador.cadastrarDesbravador(app, req, res)
    })

    app.post('/loginDesbravador', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin','*')
        app.app.controllers.cadastrarDesbravador.logarDesbravador(app, req, res)
    })

    app.post('/verificarAutenticao', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin','*')
        app.app.controllers.cadastrarDesbravador.verificarLogin(app, req, res)
    })

    app.post('/logout', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin','*')
        app.app.controllers.cadastrarDesbravador.deslogarDesbravador(app, req, res)
    })

    // =============================== Consultas de Info Desbravadores ===========================

    app.post('/infoDadosDesbravadorPainel', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin','*')
        app.app.controllers.dadosDesbravadores.dadosPrincipaisPainelDesbravador(app, req, res)
    })
    
    app.post('/infoClasseDesbravador', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin','*')
        app.app.controllers.cadastrarDesbravador.pegarClassesDesbravador(app, req, res)
    })

    app.post('/infoEspecialidadeDesbravador', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin','*')
        app.app.controllers.cadastrarDesbravador.pegarEspecialidadeDesbrador(app, req, res)
    })

    app.post('/infoConquistaDesbravador', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        app.app.controllers.cadastrarDesbravador.pegarConquistasDebravador(app, req, res)
    })
}