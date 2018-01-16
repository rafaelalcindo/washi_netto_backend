module.exports = (app) =>{
    app.get('/', (req, res) => {
        app.app.controllers.home.pagina_principal(app, req, res);
    })

    app.get('/listarDesbravadores', (req, res) => {
        app.app.controllers.home.listarDebravadores(app, req, res)
    })

    app.get('/cadastrarUnidade', (req, res) => {
        app.app.controllers.home.cadastrarUnidade(app, req, res)
    })
}