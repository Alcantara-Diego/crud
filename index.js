const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();

const teste = [
    "teste 1",
    "teste2",
    "teste 3",
];

app.get("/teste", (req, res) =>{
    res.send(teste);
});


if(process.env.NODE_ENV != "development"){

    app.use(express.static(path.join(__dirname, "front/build")));
    

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "front/build/index.html", function(){
            if(error){
                res.status(500).send(error);
            }
        }))
    })

}




app.listen(3000, () =>{
    console.log("NODE running on port 3000");
})




// change


// These warnings are false positives. There are no actual vulnerabilities affecting your app here.

// To fix npm audit warnings, move react-scripts from dependencies to devDependencies in your package.json.

// That will remove the false positive warnings.

// I agree with the point in #11102 and will make this change so that new projects don't keep having these false positive warnings.

// If you want to discuss this, please comment in #11102.