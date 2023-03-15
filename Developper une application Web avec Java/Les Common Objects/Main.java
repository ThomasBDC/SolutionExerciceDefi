import java.util.ArrayList;
import java.util.List;

class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    // Créer un tableau de joueur de foot
    List<String> mesJoueurs = new ArrayList<>();

    mesJoueurs.add("Messi");
    mesJoueurs.add("Ronaldo");
    mesJoueurs.add("Zidane");
    mesJoueurs.add("Neymar");
    mesJoueurs.add("Henry");
    mesJoueurs.add("Adriano");
    mesJoueurs.add("Pelé");
    mesJoueurs.add("Benzema");
    mesJoueurs.add("Drogba");

    ArebreBinaireDeRecherche monArbre = new ArebreBinaireDeRecherche();
    System.out.println("Voici les joueurs dans la liste :");
    for (String joueur : mesJoueurs) {
      System.out.println(joueur);
      monArbre.inserer(joueur);
      // Je veux ajouter chaque joueur à mon arbre
    }

    System.out.println("");
    System.out.println("");
    System.out.println("Maintenant, voici les joueurs tries");
    monArbre.ecrireListeTriee();
  }
}