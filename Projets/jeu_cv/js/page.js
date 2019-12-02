addEventListener('load', function(){

    var sectionJeu = document.getElementById('section_jeu');
    var sectionContact = document.getElementById('section_contact');
    var afficherCv = document.getElementById('afficherCv');
    var rechargerPage = document.getElementById('rechargerPage');
    var revenirJeu = document.getElementById('revenirJeu');
    var linkedin = document.getElementById('linkedin');
    
    afficherCv.onclick = function(){
        open('pdf/cv.pdf', 'CV');
    }
    
    rechargerPage.onclick = function(){
        location.reload();
    }
    
    afficherContact.onclick = function(){
        sectionJeu.style.display = 'none';
        sectionContact.style.display = 'block';
    }
    revenirJeu.onclick = function(){
        sectionJeu.style.display = 'flex';
        sectionContact.style.display = 'none';
    }
    
    linkedin = function(){
        open('http://linkedin.maximeperon.fr', 'linkedin');
    }

});
