// Algorithme FizzBuzzTapiocaFormica

let tableau = [[3,"Fizz"],[5,"Buzz"],[7,"Tapioca"],[13,"Formica"]];
let max = 100;
let resultat = "";

for(let i=1; i<=max; i++){
    resultat = "";
    for(let j=0; j<tableau.length; j++){
        if(i%tableau[j][0]==0){
            resultat += tableau[j][1];
        }
    }
    console.log((resultat=="" ? i : resultat));
}