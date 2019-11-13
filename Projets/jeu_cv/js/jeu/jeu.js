// Déclaration de tous les éléments
var idOrdi = document.getElementById('ordi');
var idConnaissances = document.getElementById('connaissances');
var idCps = document.getElementById('cps');
var idHtmlCss = document.getElementById('html_css');
var idNombreHtmlCss = document.getElementById('nombre_html_css');
var idAcheterHtmlCss = document.getElementById('acheter_html_css');
var idJavascript = document.getElementById('javascript');
var idAcheterJavascript = document.getElementById('acheter_javascript');
var idNombreJavascript = document.getElementById('nombre_javascript');
var idLogoHtml = document.getElementById('logo_html');


// Création des variables
idHtmlCss.style.display = 'none';
idJavascript.style.display = 'none';
var connaissances = 0;
var htmlCss = 0;
var javascript = 0;
var cps = 0;

var xLogo = 0;
var yLogo = 0;
var largeurLogo = 200;
var hauteurLogo = 100;
var valeurDeplacemmentX = 1;
var valeurDeplacemmentY = 1;
var largeurSection = section_jeu.offsetWidth;
var hauteurSection = section_jeu.offsetHeight;

// Event lors du clic sur l'ordi
idOrdi.addEventListener('mousedown',function(){
    idOrdi.style.width = '29%';
    idOrdi.style.height = '68%';
    idOrdi.style.left = '2.5%';
    idOrdi.style.top = '16%';

});
idOrdi.addEventListener('mouseup',function(){
    idOrdi.style.width = '30%';
    idOrdi.style.height = '70%';
    idOrdi.style.left = '2%';
    idOrdi.style.top = '15%';
});

// Event sur les différents cliques de boutons
idOrdi.onclick = function(){
    connaissances += 1;
    idConnaissances.innerHTML = connaissances;
};

idAcheterHtmlCss.onclick = function(){
    if(connaissances>=10){
        htmlCss += 1;
        connaissances -= 10;
        cps += 1;
        idNombreHtmlCss.innerHTML = htmlCss;
    }
};
idAcheterJavascript.onclick = function(){
    if(connaissances>=100){
        javascript += 1;
        connaissances -= 100;
        cps += 5;
        idNombreJavascript.innerHTML = javascript;
    }
};

idLogoHtml.onclick = function(){
    idLogoHtml.style.display = 'none';
    connaissances += 100;
}

// Fonction principale
var compteur = setInterval(function(){
    // Ajout de la connaissance par seconde
    connaissances += cps;

    // Mise à jour de tous les compteurs
    idConnaissances.innerHTML = connaissances;
    idCps.innerHTML = cps;
    
    // Affiche les compétences en fonction de la connaissance
    if(connaissances>=10){
        idHtmlCss.style.display = 'inline-block';
    }
    if(connaissances>=100){
        idJavascript.style.display = 'inline-block';
    }
}, 1000);

var bonus = setInterval(function() {
  if (htmlCss > 0) {
    idLogoHtml.style.display = "inline";
  }
}, 30000);


var deplacementLogo = setInterval(function(){
    if(xLogo == largeurSection-largeurLogo){
        valeurDeplacemmentX = -1;
    }
    else if(xLogo == 0){
        valeurDeplacemmentX = 1;
    }

    if(yLogo == hauteurSection){
        valeurDeplacemmentY = -1;
    }
    else if(yLogo == 0){
        valeurDeplacemmentY = 1;
    }

    xLogo += valeurDeplacemmentX;
    yLogo += valeurDeplacemmentY;
    idLogoHtml.style.top = yLogo +'px';
    idLogoHtml.style.left = xLogo +'px';
},1);

