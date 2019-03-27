const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'facul'
});

connection.connect(
    function functionName(error){
      if(!!error){
        console.error('erro ao conectar!' +  error);
      }else{
          console.log('conectado no banco  dados ');
        }
    }
  );
/********************
      CONSULTAS NO BANCO
*********************/


function getData(request, response, next) {
    let msg = "";
    StringSQL = 'SELECT * FROM new_table';
    const query = connection.query(StringSQL, function (err, rows) {
        resp = null; // resposta inicial
        if (err) resp = err; // caso de erro
        else resp = rows; // consulta realizada com sucesso!
        response.render('pages/index', {
            data: resp,
            msg
        });
    });
}

module.exports = {getData}