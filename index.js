const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const NewUser = require('./models/NewUser')
require('dotenv').config();


// Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())











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


app.get("/testando", (req, res) => {

    res.json(JSON.stringify(NewUser.findAll()))
})

app.post("/add", (req, res) => {
    
    NewUser.create({
        nome: req.body.newName,
        email: req.body.newEmail,
        telefone: req.body.newTelephone,
        linguagem: req.body.newLanguage,
        tipodeusuario: req.body.studentOrCandidate,
        stack: req.body.newStack
    }).then(function(){
        console.log("\x1b[42m", "Usuário adicionado com sucesso!")
    }).catch(function(erro){
        console.log("\x1b[41m", "Houve um erro ao criar o usuário: " + erro);
    });


    console.log("\x1b[42m", "SELECT * FROM usuarios;");

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