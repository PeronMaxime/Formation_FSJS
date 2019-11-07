var section_jeu = document.getElementById('section_jeu');
var section_contact = document.getElementById('section_contact');

var afficherCv = function(){
    open('pdf/cv.pdf', 'CV');
}

var rechargerPage = function(){
    location.reload();
}

var afficherContact = function(){
    section_jeu.style.display = 'none';
    section_contact.style.display = 'block';
}
var revenir_jeu = function(){
    section_jeu.style.display = 'flex';
    section_contact.style.display = 'none';
}

var linkedin = function(){
    open('http://linkedin.maximeperon.fr', 'linkedin');
}