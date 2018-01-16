let mysql = require('mysql');

let connMySQL = function(){
    console.log('conexao com db foi estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'washi_netto'
    })
}

module.exports = function(){
    return connMySQL;
}