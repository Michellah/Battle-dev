
function paille(tab){
    let newTab=[];
    tab.forEach(element => newTab.push(element.split(" ")));
    return newTab.sort((a,b) => parseInt(a[1])-parseInt(b[1]))[0][0]

}
console.log(paille(tab));