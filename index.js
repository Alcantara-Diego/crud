const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
 
require('dotenv').config();


// Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


 

var api = []
async function showUsersInDataBase(title, item){
    const db = require("./models/db");
    const content = await db.selectUsers(title, item)
    
    return content
}

showUsersInDataBase("all", "none")

async function insertUserInTheDatabase(newUserInfo){
    const db = require("./models/db");

    console.log(newUserInfo)
    db.insertUser(newUserInfo)
}





app.get("/api", (req, res) =>{

    res.json(api);
    
});


app.get("/search?", (req, res) =>{

    const values = [req.query.linguagem, req.query.usuario, req.query.stack];

    const urlParams = values;
    if(urlParams) console.log(urlParams);

    let param = "unselected";

    for(let i=0; i< values.length; i++){

        if(values[i]) {

            console.log(values[i]);
            console.log(i)

            switch (i) {
                case 0:
                    param = "linguagem";
                    console.log(param);
                    break;

                case 1:
                    param = "tipodeusuario";
                    console.log(param);
                    break;

                case 2:
                    param = "stack"
                    console.log(param);
                    break;
                default:
                    break;
            }

            let getContentFromDatabase = showUsersInDataBase(param, values[i])
            

            getContentFromDatabase.then(result =>{
                api = result;
                console.table(api);
                res.json(api)
            })
            



            
        }

        
        
    }

    
    
    // showUsersInDataBase("all", "none").then(res.send(api));
});




if(process.env.NODE_ENV != "development"){

    // Render the front-end content
    app.use(express.static(path.join(__dirname, "front/build")));
    
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "front/build/index.html", function(){
            if(error){
                res.status(500).send(error);
            }
        }))
    })

}




app.post("/add", (req, res) => {
    
        console.log("SELECT * FROM usuarios;");
        const newUserInfo = {
            nome: req.body.newName,
            email: req.body.newEmail,
            telefone: req.body.newTelephone,
            linguagem: req.body.newLanguage,
            tipodeusuario: req.body.studentOrCandidate,
            stack: req.body.newStack
        }
    insertUserInTheDatabase(newUserInfo)

    // res.sendFile(path.join(__dirname, "front/build/index.html"));
    // showUsersInDataBase("all", "none").then(res.send(api));

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