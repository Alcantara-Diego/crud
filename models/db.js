 

async function connect() {
    if(global.connection && global.connection.state !== 'disconnected'){
        return global.connection
    }

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection("mysql://root:123456@localhost:3306/usuarios");

    console.log("Conectado ao MySQL");
    global.connection = connection;
    return connection;
}


async function selectUsers(title, item){
    const conn = await connect();

    if(title === "all"){
        // [rows, fields] make sure that only the required information will be returned
        const [rows, fields] = await conn.execute('SELECT * FROM usuarios');
        
        return await rows;
    } else{
        const [rows, fields] = await conn.execute(`SELECT * FROM usuarios WHERE ${title} = "${item}"`);

        return await rows;
    }
    
    
}

async function insertUser(newUserInfo){
    const conn = await connect();

    const sql = 'INSERT INTO usuarios(nome, email, telefone, linguagem, tipodeusuario, stack) VALUES (?, ?, ?, ?, ?, ?);';

    const values = [newUserInfo.nome, newUserInfo.email, newUserInfo.telefone, newUserInfo.linguagem, newUserInfo.tipodeusuario, newUserInfo.stack];

    await conn.query(sql, values);


}
module.exports = {selectUsers, insertUser}