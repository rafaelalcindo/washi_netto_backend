let app  = require('./config/server');

//let rotaNoticias = require('./app/routes/noticias')
//rotaNoticias(app);

app.listen(4100, () => {
    console.log("Servidor rodando com express");
})