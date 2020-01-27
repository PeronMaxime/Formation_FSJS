var salutation = 'Bonjour';
alert(salutation);

var maFonction = function(){
    console.log('Dans la fonction 1: '+salutation);
    if(salutation){
        let test = 'ok';
        const autreTest = 'constante';
        console.log(test);
        console.log(autreTest);
    }
    // console.log(autreTest);
    console.log('Dans la fonction 2: '+test);
};

maFonction();