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
}