// Déclaration des variables

let digiCode = [0,0,0,0];
let digicodeCraque = [0,0,0,0];

// Initialisation du digicode

for(let i=0 ; i<4 ; i++){
    digiCode[i] = Math.floor(Math.random()*10);
}

// Recherche du digicode

for(let i = 0 ; i<4 ; i++){
    for(let j=0; j<10 ; j++){
        if(digiCode[i] == j){
            digicodeCraque[i] = j;
            break;
        }
    }
}

console.log("Le digicode est : " + digicodeCraque)