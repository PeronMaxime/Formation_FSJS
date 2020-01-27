'use strict';

var salutation = 'Bonjour';
let unLetDefiniDansLeContexteGlobal = 'let global';
console.log(salutation);

var maFonction = function() {
    console.log('Dans la fonction (1): ' + salutation);

    let variableLet1  = 'une variable limitée au bloc de la focntion';

    if (salutation) {
        var uneVarDangereuse = 'Danger';
        console.log('variableLet1:', variableLet1);
        let test = 'OK';
        console.log('test : ', test);
        const autreTest = 'constante';
        console.log('autreTest : ', autreTest);
    }

    console.log('variableLet1:', variableLet1);
    console.log('uneVarDangereuse:', uneVarDangereuse);
    // console.log('test : ', test)
    // console.log('autreTest : ', autreTest)

    console.log('Dans la fonction (2): ' + salutation);

    for(var i = 0; i < 10; i++ ) {
        console.log('i:', i);
    }
    console.log('i en dehors de la boucle:', i);
    var i = 'du texte';
    var i = 'du texte';
    console.log('i en dehors de la boucle:', i);

    for(let j = 0; j < 10; j++ ) {
        console.log('j:', j);
    }
    let j = 'j du texte';
    console.log('j en dehors de la boucle:', j);


    let monTexte = 'Bonjour';
    console.log('monTexte:', monTexte);
    monTexte = 'Au revoir';
    console.log('monTexte:', monTexte);

    const autreTexte = 'Hello';
    // autreTexte = 'Good-bye';

    const monTableau = ['orange', 'pomme', 'kiwi'];
    monTableau.push('poire');
    monTableau[4] = 'banane'; 
    console.log('monTableau:', monTableau)
    // monTableau = ['pêche'];

    const maVoiture = {
        marque: 'Renault'
    }
    console.log('maVoiture:', maVoiture);
    maVoiture.marque = 'Ferrari';
    maVoiture.couleur = 'Rouge';
    console.log('maVoiture:', maVoiture);
}


// console.log('variableLet1:', variableLet1);

console.log('unLetDefiniDansLeContexteGlobal', unLetDefiniDansLeContexteGlobal);
maFonction();
