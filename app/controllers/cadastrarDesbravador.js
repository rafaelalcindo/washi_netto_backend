var { Desbravador } = require("../classes/desbravadorClass");
var { FichaMedica } = require("../classes/fichaMedicaClass");
var { Responsaveis } = require("../classes/responsavel")


module.exports.cadastrarDesbravador =  (app, req, res) =>{
    let form_desbrava = req.body;

    let unidade           = req.body.unidade
    let nome_desbrava     = req.body.nome
    let sobrenome         = req.body.sobrenome
    let cep               = req.body.cep
    let endereco          = req.body.endereco
    let complementar      = req.body.complementar
    let estado            = req.body.estado
    let cidade            = req.body.cidade
    let ativo             = req.body.ativo
    let login             = req.body.login
    let senha             = req.body.senha
    let data_nasc         = req.body.data_nasc
    let cadastrado_por    = req.body.cadastrado_por
    let rg_desbravador    = req.body.rg_desbravador
    let orgao_espedicao   = req.body.orgao_espedicao
    let estado_civil      = req.body.estado_civil
    let tamanho_camisa    = req.body.tamanho_camisa
    let cpf_desbravador   = req.body.cpf_desbravador
    let data_cad_desbrava = req.body.data_cad_desbrava

    let desbravador = new Desbravador();
    
    desbravador.unidade         = unidade;
    desbravador.nome            = nome_desbrava;
    desbravador.sobrenome       = sobrenome;
    desbravador.cep             = cep
    desbravador.endereco        = endereco
    desbravador.complementar    = complementar
    desbravador.estado          = estado
    desbravador.cidade          = cidade
    desbravador.ativo           = ativo
    desbravador.login           = login
    desbravador.senha           = senha
    desbravador.data_nasc       = data_nasc
    desbravador.cadastrado_por  = cadastrado_por
    desbravador.rg_desbravador  = rg_desbravador
    desbravador.orgao_espedicao = orgao_espedicao
    desbravador.estado_civil    = estado_civil
    desbravador.tamanho_camisa  = tamanho_camisa
    desbravador.cpf_desbravador = cpf_desbravador
    desbravador.data_cad_desbrava = data_cad_desbrava

    let fichaMedica = new FichaMedica();
    fichaMedica.plano_saude         = req.body.plano_saude
    fichaMedica.carteira_nac_saude  = req.body.carteira_nac_saude
    fichaMedica.denc_teve           = req.body.denc_teve
    fichaMedica.problemas_saude     = req.body.problemas_saude
    fichaMedica.alergia_remedio     = req.body.alergia_remedio
    fichaMedica.tipo_sanguineo      = req.body.tipo_sanguineo


    let responsaveis = new Responsaveis()
    responsaveis.nome_responsavel       = req.body.nome_responsavel
    responsaveis.sobrenome_responsavel  = req.body.sobrenome_responsavel
    responsaveis.endereco_responsavel   = req.body.endereco_responsavel
    responsaveis.cidade_responsavel     = req.body.cidade_responsavel
    responsaveis.estado_responsavel     = req.body.estado_responsavel
    responsaveis.tel_responsavel        = req.body.tel_responsavel
    responsaveis.cpf_responsavel        = req.body.cpf_responsavel

    let connection = app.config.dbConnection();

    desbravador.salvarDesbravador(connection, desbravador, fichaMedica, responsaveis);

    //console.log(form_desbrava.nome);
    
}


module.exports.logarDesbravador = (app, req, res)=>{
    let testelogin    = req.body.login;
    let testesenha    = req.body.senha;
    
    let connection = app.config.dbConnection();
    let desbravador = new Desbravador();
    
    desbravador.logarDesbravador(connection, testelogin, testesenha, req,res);    
   /* req.session.login = testelogin;
    res.cookie('login', testelogin);
    console.log(req.cookies); */
}

module.exports.verificarLogin = (app, req, res) =>{

    let connection = app.config.dbConnection();
    let desbravador = new Desbravador();

    if(req.session.autenticar){
        //console.log(req.cookies);
        //res.send('autenticado')
        desbravador.autenticarDesbravador(connection, req.session.login, req.session.senha, req, res);
    }else if(req.cookies.autenticar){
        desbravador.autenticarDesbravador(connection, req.cookies.login, req.cookies.senha, req, res);
    }else{
        res.send('[{}]')
    }
}

module.exports.deslogarDesbravador = (app, req, res) =>{
    req.session.destroy();
    res.clearCookie('autenticar');
    res.clearCookie('login');
    res.clearCookie('senha');
    res.send('{logout: true}')
}

module.exports.dashBoardInformation = (app, req, res) => {
    
}
