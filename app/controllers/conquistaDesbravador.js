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