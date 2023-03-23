# Algorithme Build your checkerboard en Python (fonction damier())

def damier():
    taille = int(input("Entrez une taille : "))
    caractere = input("Entrez un caractère : ")
    for i in range(taille):
        for j in range(taille):
            if (i+j)%2==0:
                print(caractere,end="")
            else:
                print(" ",end="")
        print(end="\n")

damier()