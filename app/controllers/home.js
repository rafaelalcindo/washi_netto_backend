var { Desbravador } = require("../classes/desbravadorClass");

module.exports.pagina_principal = (app, req, res) =>{
    let desbravador = new Desbravador();
    desbravador.nome = 'Rafael';
    console.log(desbravador.nome);
}

module.exports.listarDebravadores = (app, req, res) =>{
    res.end('<h2>Listar Desbravadores</h2>')
}

module.exports.cadastrarUnidade = (app, req, res) =>{
    res.end('<h2>Cadastrar Unidade</h2>')
}