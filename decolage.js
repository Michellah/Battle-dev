
let resultat = [];
let tab=["6","rocket","boosters","rocket","boosters","rocket"];
function decolage(tab) {
    for (let element of tab){
        resultat=(tab.filter((x)=>{return x==element}));
        if (resultat.length == 2) {
            return element
        }
    }
    
}
console.log(decolage(tab));

