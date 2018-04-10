exports.PrepareQuery = class PrepareQuery{
    constructor(){

    }

    salvarDesbravadorQuery(obj){
        let query = "insert into desbravador";
        query += "(idUnidades, nome_desbravador, sobrenome_desbravador, cep_desbravador, endereco_desbravador, completo_desbravador, cidade_desbravador, estado_desbravador, ativo_desbravador, login_desbravador, senha_desbravador ,";
        query += "data_nasc_desbravador , cadastrado_por , rg_desbravador , orgao_expediente_desbravador, estado_civil_desbravador, tamanho_camisa_desbravador, cpf_desbravador, data_cad_desbravador)";
        query += "values (";
        query += ""+obj.unidade +","
        query += "'"+obj.nome+"',"
        query += "'"+obj.sobrenome+"',"
        query += "'"+obj.cep+"',"
        query += "'"+obj.endereco+"',"
        query += "'"+obj.complementar+"',"
        query += "'"+obj.estado+"',"
        query += "'"+obj.cidade+"',"
        query += "'"+obj.ativo+"',"
        query += "'"+obj.login+"',"
        query += "'"+obj.senha+"',"
        query += "'"+obj.data_nasc+"',"
        query += "'"+obj.cadastrado_por+"',"
        query += "'"+obj.rg_desbravador+"',"
        query += "'"+obj.orgao_espedicao+"',"
        query += "'"+obj.estado_civil+"',"
        query += "'"+obj.tamanho_camisa+"',"
        query += "'"+obj.cpf_desbravador+"',"
        query += "'"+obj.data_cad_desbrava+"')"

        return query;

    }

    salvarFichaMedicaDesbravador(obj,id_desbrava){
        let query = "INSERT INTO ficha_medica";
        query += "(";
        query += "plano_saude,";
        query += "carteira_nac_saude,";
        query += "denc_teve,";
        query += "problemas_saude,";
        query += "alergia_remedio,";
        query += "tipo_sanguineo,";
        query += "Desbravador_idDesbravador)";
        query += "VALUES";
        query += "('"+obj.plano_saude+"',"
        query += "'"+obj.carteira_nac_saude +"', "
        query += "'"+obj.denc_teve+"',"
        query += "'"+obj.problemas_saude+"',"
        query += "'"+obj.alergia_remedio+"',"
        query += "'"+obj.tipo_sanguineo+"',"
        query += "'"+id_desbrava+"')"

        return query;
    }

    salvarResponsaveisDesbravadores(obj, id_desbrava){
        let query = "INSERT INTO responsaveis"
        query += "("
        query += "idDesbravador,"
        query += "nome_responsavel,"
        query += "sobrenome_responsavel,"
        query += "endereco_responsavel,"
        query += "cidade_responsavel,"
        query += "estado_responsavel,"
        query += "tel_responsavel,"
        query += "cpf_responsavel)"
        query += "VALUES"
        query += "( "+id_desbrava+" ,"
        query += " '"+obj.nome_responsavel+"', "
        query += " '"+obj.sobrenome_responsavel+"', "
        query += " '"+obj.endereco_responsavel+"', "
        query += " '"+obj.cidade_responsavel+"', "
        query += " '"+obj.estado_responsavel+"', "
        query += " '"+obj.tel_responsavel+"', "
        query += " '"+obj.cpf_responsavel+"') "

        return query;

    }

    inserirAguitosCoin(id_desbrava){
        let query = "INSERT INTO aguitos_coin (Desbravador_idDesbravador,quant_aguitos)VALUES"
        query += "("+id_desbrava+" , 100 )";
        return query
    }
    
    // =========================================== Consultas =============================================
    
    verificarLoginQuery(login, senha){
        let query = "select idDesbravador as 'id', nome_desbravador as 'nome', sobrenome_desbravador as 'sobrenome', nivel_desbravador as 'nivel' from desbravador where login_desbravador = '"+login+"' and senha_desbravador = '"+senha+"'; ";
        return query;
    }


}