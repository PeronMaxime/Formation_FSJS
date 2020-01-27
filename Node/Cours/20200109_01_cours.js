'use strict';

const medor = {
  cri: 'Waf !',
  aboit: function() {
    console.log(this.cri);
  }
};

medor.aDesPuces = true;
medor.cri = 'Wouf !';

// medor = "Miaou !"; // Plante !

// Faire planter le code volontairement :
// throw new Error("Bim ! "); // Fait planter le code.
