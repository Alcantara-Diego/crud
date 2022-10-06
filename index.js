const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
require('dotenv').config();


// Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Conection with the mysql database
const sequelize = new Sequelize('teste', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
})

const Faketable = sequelize.define('faketable', {
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.INTEGER
    },
    linguagem: {
        type: Sequelize.STRING
    },
    tipodeusuario: {
        type: Sequelize.STRING
    },
    stack: {
        type: Sequelize.STRING
    }
})








const teste = [
    "teste 1",
    "teste2",
    "teste 3",
];
app.get("/teste", (req, res) =>{
    res.send(teste);
});



if(process.env.NODE_ENV != "development"){

    // Render the front-end content
    app.use(express.static(path.join(__dirname, "front/build")));
    
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "front/build/index.html", function(){
            if(error){
                res.status(500).send(error);
            }
        }))
    })

}


app.post("/add", (req, res) => {
    
    Faketable.create({
        nome: req.body.newName,
        email: req.body.newEmail,
        telefone: req.body.newTelephone,
        linguagem: req.body.newLanguage,
        tipodeusuario: req.body.studentOrCandidate,
        stack: req.body.newStack
    });


    console.log("SELECT * FROM faketables;");

    res.sendFile(path.join(__dirname, "front/build/index.html"));



})

app.listen(3001, () =>{
    console.log("NODE running on port 3001");
    console.log("Link: http://localhost:3001")
})




// change

// These warnings are false positives. There are no actual vulnerabilities affecting your app here.

// To fix npm audit warnings, move react-scripts from dependencies to devDependencies in your package.json.

// That will remove the false positive warnings.

// I agree with the point in #11102 and will make this change so that new projects don't keep having these false positive warnings.

// If you want to discuss this, please comment in #11102.