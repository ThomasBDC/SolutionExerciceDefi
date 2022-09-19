const promo = require('../promo.js') 
const assert = require(`assert`)

describe(`Test exercice défi`, function(){
    it(`Devrait renvoyer 0`, function(){
        assert.equal(promo(0, 10), 0)
    })
    it(`Devrait renvoyer le résultat de 40 - 15%`, function(){
        assert.equal(promo(40, 15), 34)
    })
    it(`Lorsque l'une des 2 valeurs n'est pas un nombre.`, function(){
        assert.equal(promo('Hello World', 15), false, 'échoue car le prix n est pas un nombre')
    })
})