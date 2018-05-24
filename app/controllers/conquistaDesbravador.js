var { Especialidades } = require('../classes/especialidadeClass');

module.exports.cadastrarEspecialidadeDesbravador = (app, req, res) => {
    
    let id_desbravador      = req.body.id_desbravador;
    let especialidade_nome  = req.body.especialidade;
    let area                = req.body.area;
    let instrutor           = req.body.instrutor;
    let conclusao           = req.body.conclusao;
    let autor               = req.body.autor;
    let cadastrado          = req.body.cadastrado;

    let especialidade = new Especialidades();
    especialidade.idDesbravador      = id_desbravador;
    especialidade.nome_especialidade = especialidade_nome;
    especialidade.area               = area;
    especialidade.instrutor          = instrutor;
    especialidade.conclusao          = conclusao;
    especialidade.autor              = autor;
    especialidade.cadastrado         = cadastrado;

    let connection = app.config.dbConnection();

    especialidade.inserirEspecialidade(connection, especialidade, req, res);

}

module.exports.consultarEspecialidadeDesbravadorAno = (app, req, res) => {
    let id_desbravador   = req.body.id_desbravador;

    let especialidade = new Especialidades();
    let connection = app.config.dbConnection();
    especialidade.consultarEspecialidadeAno(connection,id_desbravador,req, res);
}

module.exports.consultarEspecialidadeDesbravadorTotal = (app, req, res) => {
    let id_desbravador  = req.body.id_desbravador;

    let especialidade   = new Especialidades();
    let connection      = app.config.dbConnection();
    especialidade.consultaEspecialidadeTotal(connection, id_desbravador, req, res);
}

module.exports.consultarEspecialidadeDesbravadorLista = (app, req, res) => {
    let id_desbravador  = req.body.id_desbravador;

    let especialidade  = new Especialidades();
    let connection     = app.config.dbConnection();
    especialidade.consultaEspecialidadeDesbravador(connection, id_desbravador, req, res);
    
}

module.exports.consultarQtdEspecialidadePorDesbravador = (app, req, res) => {
    let especialidade = new Especialidades();
    let connection    = app.config.dbConnection();
    especialidade.cunsultaQtdEspecialidadeDesbravador(connection, req, res);
}