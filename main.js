const fs = require('fs')

fs.readFile("./arq1.txt", function(error, value){
    if (error){
        console.error('deu ruim', error.message);
        return
    }
    console.log(`conteudo : ${value}`);
    
    fs.readFile("./arq2.txt", function(error, value){
    if (error){
        console.error('deu ruim', error.message);
        return
    }
    console.log(`conteudo : ${value}`);

})

fs.readFile("./arq3.txt", function(error, value){
    if (error){
        console.error('deu ruim', error.message);
        return
    }
    console.log(`conteudo : ${value}`);

})

})







