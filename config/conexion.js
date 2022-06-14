var mysql = require("mysql");
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'interbus'
});
con.connect(
    (err)=>{
        if(!err){
            console.log('Conexion establecida');
        }else{
            console.log('ERROR DE CONEXIÓN');
        }
    }
);
module.exports=con;