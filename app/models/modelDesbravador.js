exports.ModelDesbravador = class ModelDesbravador{
    constructor(connection){
        this._connection = connection;
    }

    salvar(sql_query, callback){
        this._connection.query(sql_query, callback);
    }

    
}