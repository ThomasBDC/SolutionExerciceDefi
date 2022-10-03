let chaise = 120.50
let table = 1200.99
let vase = 420.01
let canape = 12585.55
const prices = [120.50,1200.99,420.01,12585.55]

//Pour appeler ma fonction, il faudra que je passe le paramètre prix initial
//let prixFinal = ApplyPromo(120)
function getPromoPrice(prixInitial, remise){
    //10 - 25 % => 10 - (10 * 0.25)

    let prixFinal = prixInitial - (prixInitial * (remise / 100))
    return prixFinal;
}

function roundTOSup(number){
    let numberFCent = number * 100;
    let numberArrondiF100 = Math.ceil(numberFCent);
    return numberArrondiF100/100;
}

function replaceDotByEur(number){
    let prixString = number.toString();
    let prixWithEur = prixString.replaceAll('.', ',');
    prixWithEur += "€";
    return prixWithEur;
}

//Boucle sur les prix
prices.forEach(prix => {
    let prixPromo = getPromoPrice(prix, 25);
    prixPromo = roundTOSup(prixPromo);
    console.log(replaceDotByEur(prixPromo));
})