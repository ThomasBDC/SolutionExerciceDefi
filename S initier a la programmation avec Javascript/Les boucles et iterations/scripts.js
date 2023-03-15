/* Afficher en console les tables de multiplicataion de 1 à 9 */

//Parcourir les tables de 1 à 9  
for (let multiplicateurTable = 1; multiplicateurTable < 10; multiplicateurTable++) {
    //Pour chaque table, parcourir, tous les multiplicateurs (1 à 9)
    console.log(`=== table de  ${multiplicateurTable} ===`);
    for(let multiplicateur = 1; multiplicateur < 10; multiplicateur++){
        let resultat = multiplicateurTable * multiplicateur;
        console.log(`${multiplicateurTable} x ${multiplicateur} = ${resultat}`);
    }
}