from random import randint


def display_hangman(num_tries):
  print(" ____")
  print("|    |")
  print("|    %s" % ("O" if num_tries >= 1 else " "))
  print("|   %s%s%s" %
        ("/" if num_tries >= 3 else " ", "|" if num_tries >= 2 else " ",
         "\\" if num_tries >= 4 else " "))
  print("|   %s %s" %
        ("/" if num_tries >= 5 else " ", "\\" if num_tries >= 6 else " "))


def afficher_mot_lettre_trouvee(lettresTrouvees, mot):

  motAAfficher = ""
  #Parcours les caractères de mon mot, si le char est dans mon tableau de lettres, alors ok
  for lettre in mot:
    if (lettre in lettresTrouvees):
      motAAfficher += lettre
    else:
      motAAfficher += "_"

  return motAAfficher


lesMots = [
  "tasse",
  "micro",
  "ecran",
  "parfum",
  "tablette",
  "webcam",
  "etudiant",
]

continuePartie = True
while continuePartie:
  cptEssais = 0
  lettreTrouvees = ""
  #Générer un mot alétoire depuis le tableau
  indexAleatoire = randint(0, len(lesMots) - 1)
  motATrouver = lesMots[indexAleatoire]
  print(motATrouver)

  while cptEssais < 6 and "_" in afficher_mot_lettre_trouvee(
                                        lettreTrouvees, motATrouver):
    lettreProposee = input("Proposez une lettre : ")
    if lettreProposee in motATrouver:
      print("La lettre est dans le mot")
      lettreTrouvees += lettreProposee
      print(afficher_mot_lettre_trouvee(lettreTrouvees, motATrouver))
    else:
      cptEssais += 1
      print("La lettre n'est pas dans le mot")
      display_hangman(cptEssais)

  #Sois j'ai perdu, sois j'ai gagné
  if cptEssais >= 6:
    print("PEEEEEEEERDUUUUU")
  else:
    print("GAAAAAAAAAAAAGNEEEEEE")
  # En fin de partie, proposer une nouvelle partie
  response = input("Voulez-vous (re)jouer au pendu ? o/n : ")

  if response == "n":
    continuePartie = False
