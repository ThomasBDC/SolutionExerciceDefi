class Joueur{
    /**
     * 
     * @param {string} nom 
     * @param {string} prenom 
     * @param {number} nbPoints 
     * @param {number} tour 
     */
    constructor(nom, prenom, nbPoints = 100, tour = 0){
        this.nom = nom;
        this.prenom = prenom;
        this.nbPoints = nbPoints;
        this.tour = tour;
    }

    getIdentiteJoueur(){
        let phrase = `${this.nom} ${this.prenom}`;
        return phrase;
    }

    showPoints(){
        let phrase = `${this.getIdentiteJoueur()} : ${this.nbPoints} point(s)`;
        console.log(phrase);
    }

    attaque(adversaire, bonus = 0){
        //Une attaque fait perdre entre 1 et 50 points au hasard
        if(this.tour < 3){
            const pointsToLoose = this.rand(50) + bonus;
            const pointsBeforeAttack = adversaire.nbPoints;
            const pointAfterAttack = pointsBeforeAttack - pointsToLoose;
            if(pointAfterAttack < 0){
                adversaire.nbPoints = 0;
            }
            else{
                adversaire.nbPoints = pointAfterAttack;
            }
            adversaire.showPoints();
        }
        this.tour++;
    }

    superAttaque(adversaire){
        this.attaque(adversaire, 10);
    }

    rand(nb) {
        return Math.floor(Math.random() * Math.floor(nb));
    }
}

class Partie{
    /**
     * 
     * @param {Object[]} joueurs 
     * @param {number} tour 
     */
    constructor(joueurs, tour){
        this.joueurVainqueur = null;
        this.joueurs = joueurs;
        this.tour = tour;
    }

    vainqueur(){
        let bestPlayer = this.joueurs[0];
        this.joueurs.forEach(player => {
            if(player.nbPoints > bestPlayer.nbPoints){
                bestPlayer = player;
            }
        });
        console.log(`Et le vainqueur est : ${bestPlayer.nom} ${bestPlayer.prenom}`);
    }
}

let player1 = new Joueur("Thomas", "Bureau");
let player2 = new Joueur("Sebastien", "BAUDET");
let player3 = new Joueur("Emmanuel", "HAMON");

let partie = new Partie([player1, player2, player3], 3);

//Déroulement de la partie
for (let tour=0; tour<partie.tour; tour++) {
    player1.attaque(player3)
    player1.superAttaque(player2)
    
    player2.attaque(player1)
    player2.superAttaque(player3)
    
    player3.attaque(player2)
    player3.superAttaque(player1)
}
  
player1.showPoints()
player2.showPoints()
player3.showPoints()

partie.vainqueur()