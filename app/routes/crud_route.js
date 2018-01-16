module.exports = (app) =>{
    app.post('/cadastrarDesbravador', (req, res) => {
        
        app.app.controllers.cadastrarDesbravador.cadastrarDesbravador(app, req, res)
    })

    app.post('/', (req, res) => {
        
    })
}