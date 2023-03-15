public class ArebreBinaireDeRecherche {
    private boolean ArbreVide;
    private String nomDeJoeursDeFoot;
    private ArebreBinaireDeRecherche abrGauche;
    private ArebreBinaireDeRecherche abrDroit;

    public ArebreBinaireDeRecherche() {
        ArbreVide = true;
    }

    public boolean isArbreVide() {
        return ArbreVide;
    }

    public void setArbreVide(boolean arbreVide) {
        ArbreVide = arbreVide;
    }

    public String getNomDeJoeursDeFoot() {
        return nomDeJoeursDeFoot;
    }

    public void setNomDeJoeursDeFoot(String nomDeJoeursDeFoot) {
        this.nomDeJoeursDeFoot = nomDeJoeursDeFoot;
    }

    public ArebreBinaireDeRecherche getAbrGauche() {
        return abrGauche;
    }

    public void setAbrGauche(ArebreBinaireDeRecherche abrGauche) {
        this.abrGauche = abrGauche;
    }

    public ArebreBinaireDeRecherche getAbrDroit() {
        return abrDroit;
    }

    public void setAbrDroit(ArebreBinaireDeRecherche abrDroit) {
        this.abrDroit = abrDroit;
    }

    public void inserer(String mot) {
        if (isArbreVide())  {
            setArbreVide(false);
            setNomDeJoeursDeFoot(mot);
            setAbrGauche(new ArebreBinaireDeRecherche());
            setAbrDroit(new ArebreBinaireDeRecherche());
        } else if (mot.compareTo(getNomDeJoeursDeFoot()) < 0) getAbrGauche().inserer(mot);
        else if (mot.compareTo(getNomDeJoeursDeFoot()) > 0) getAbrDroit().inserer(mot);
    }


    public void ecrireListeTriee() {
        if (!isArbreVide()) {
            getAbrGauche().ecrireListeTriee();
            System.out.println("\t\t" + getNomDeJoeursDeFoot());
            getAbrDroit().ecrireListeTriee();
        }
    }

    public int hauteur() {
        int hauteurArbreGauche, hauteurArbreDroit;
        if (isArbreVide()) return -1;
        hauteurArbreGauche = getAbrGauche().hauteur();
        hauteurArbreDroit = getAbrDroit().hauteur();
        if (hauteurArbreGauche >= hauteurArbreDroit) return hauteurArbreGauche + 1;
        return hauteurArbreDroit + 1;
    }
}