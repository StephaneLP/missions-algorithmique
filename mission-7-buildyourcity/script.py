# Algorithme Build your city – En Python

from random import *
import math

# Déclaration et affectation des variables

taille = int(input("\nEntrez une taille (nombre d'immeubles) : "))
caractere = input("Entrez un caractère : ")
hauteurImmeubles = [0]*taille
ville = "\nAffichage de la ville :\n\n"

# Génération aléatoire de la taille des immeubles (colonnes entre 0 et 9)

for i in range(taille):
    hauteurImmeubles[i] = math.floor(random()*10)
print("\nHauteur (aléatoire) des ",taille," immeubles :\n\n", hauteurImmeubles)

# Affichage de la ville

for i in range(9,0,-1):
    for j in range(taille):
        if i>hauteurImmeubles[j]:
            ville += " "
        else:
            ville += caractere
    ville += "\n"
print(ville)