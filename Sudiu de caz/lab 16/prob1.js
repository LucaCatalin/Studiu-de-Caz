console.log("Introdu 6 numere");
var numere=[];
var suma=0;
var scaderea=0;
var imultirea;
var imparitrwa;
var n=parseInt(prompt("INtroduceti cate numere doriti:"))
for(let i=0;i<n;i++){
    var numar=parseFloat(prompt("Introduceti numarul:"+(i+1)+":"))
    numere.push(numar);
    suma+=numar; 
}
