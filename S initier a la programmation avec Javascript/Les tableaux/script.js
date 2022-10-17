//Créer le tableau
const couleursTab = ['Bleu', 'Rouge', 'Vert', 'Jaune', 'Blanc'];
//Afficher la taille du tableau
console.log(couleursTab.length);
//Afficher des éléments précis
console.log(couleursTab[0], couleursTab[4], couleursTab[1]);
//Tout afficher, manière 1
for (let i = 0; i < couleursTab.length; i++) {
    console.log(couleursTab[i]);
}
//Tout afficher, manière 2
couleursTab.forEach(couleur => {
    console.log(couleur);
});

//Créer le tableau à 2 dimensions
const couleursTwoDim = 
[
    ['Bleu', 'Jaune'],
    ['Blanc', 'Vert'],
    ['Rouge'],
];
//Afficher des éléments précis du tableau à deux dimensions
console.log(couleursTwoDim[1][0]);
console.log(couleursTwoDim[1][1]);
//Afficher tous les éléments du tableau à deux dimensions
couleursTwoDim.forEach(tabCouleur => {
    tabCouleur.forEach(couleur => {
        console.log(couleur);
    });
});