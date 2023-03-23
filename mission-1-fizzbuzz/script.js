// Algorithme FizzBuzz

let resultat = "";
for(let i=1; i<=100; i++){
    resultat = "";
    
    if(i%3==0) resultat += "Fizz";
    if(i%5==0) resultat += "Buzz";

    console.log((resultat=="" ? i : resultat));
}