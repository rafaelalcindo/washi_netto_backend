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

    buscarDadosDesbravadorPainelQuery(id) {
        let query = "select des.idDesbravador as 'id', des.nome_desbravador as 'nome',";
        query += "des.sobrenome_desbravador as 'sobrenome',  uni.nome_unidade as 'unidade',";
        query += "uni.pontuacao_unidade as 'pontuacao_unidade', uni.equipamentos as 'equipamentos',";
        query += "coin.quant_aguitos as 'aguitos' from desbravador des, aguitos_coin coin, unidades uni";
        query += " where des.idUnidades = uni.idUnidades and des.idDesbravador = coin.Desbravador_idDesbravador and";
        query += " des.idDesbravador = "+id+"";
        return query;
    }

    buscarClassesDesbravador(id) {
        let query = "select nome_classe as 'classe', data_conclusao as 'conclusao' from classes where idDesbravador = "+id;
        return query;
    }

    buscarEspecialidadeDesbravador(id) {
        let query = "select nome_especialidade as 'especialidade', area, conclusao from especialidades where idDesbravador = "+id;
        return query;
    }

    buscarConquistasDesbravador(id) {
        let query = "select categoria_conquista as 'categoria', nome_conquista as 'nome', descricao_conquista as 'descricao', data_conquista as 'data' ";
        query += "from conquistas where desbravador_idDesbravador = "+id;
        return query;
    }

    // =====================================================================
    //                      Unidade Inset Consultas
    //======================================================================

    pegarpontosUnidade(id){
        let query = "select pontuacao_unidade from unidades where idUnidades = "+id;
        return query;
    }

    inserirPontuacaoUnidade(historico, dataHoje){
        let query = "insert into historico_pontuacao_unidade ( titulo, descricao, pontos_guanhos, data_conclusao, idUnidades ) values ('"+historico.titulo+"', '"+historico.descricao+"', "+historico.pontosGanhos+", '"+dataHoje+"', "+historico.id_unidade+")";
        return query;
    }

    atualizarPontuaçãoTotalUnidade(pontos, idUnidade){
        let query = "update unidades set pontuacao_unidade = "+pontos+" where idUnidades = "+idUnidade;
        return query;
    }


    //============================================================================
    //                      Consultas e inserção de Especialidades
    //============================================================================

    consultarQtdEspecialidadeAno(id){
        let query = "select count(*) 'quant_especialidade_ano' from especialidades where idDesbravador = "+id+" and cadastrado between '2018-01-02' and '2018-12-29'";
        return query;
    }

    consultaQtdEspecialidadeTotal(id){
        let query = "select count(*) 'quant_especialidade' from especialidades where idDesbravador = "+id;
        return query;
    }

    inserirEspecialidade(especialidade){
        let query = "insert into especialidades (idDesbravador ,nome_especialidade, area, instrutor, conclusao, autor, cadastrado)";
        query += "values ("+especialidade.idDesbravador+",'"+especialidade.nome_especialidade+"', '"+especialidade.area+"',";
        query += " '"+especialidade.instrutor+"', '"+especialidade.conclusao+"', '"+especialidade.autor+"', '"+especialidade.cadastrado+"') ";
        return query;
    }

    consultarListaEspecialidadeDesbravador(id){
        let query = "select * from especialidades where idDesbravador = "+id;
        return query;
    }

}