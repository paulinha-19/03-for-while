//1 - Criar um loop que conte de 1 até 10 usando FOR
console.log("---------------------------1 até 10 usando FOR------------------------------");
document.write("<p>//1 - Criar um loop que conte de 1 até 10 usando FOR</p>");
for (let increment = 1; increment <= 10; increment++) {
    document.write(increment + "<br>"); 
	console.log(increment);
}
//2 - Criar um loop que conte de 10 até 1 usando WHILE
console.log("---------------------------10 até 1 usando WHILE----------------------------");
document.write("<p>//2 - Criar um loop que conte de 10 até 1 usando WHILE</p>");
let decrement = 10;
while (decrement > 0) {
    document.write(decrement + "<br>"); 
    console.log(decrement);
    decrement--;
}
//3 - Criar um loop que conte todos os números ímpares de 1 até 100
console.log("---------------------------Números ímpares de 1 até 100---------------------");
document.write("<p>//3 - Criar um loop que conte todos os números ímpares de 1 até 100</p>");
for (let impar = 1; impar <= 100; impar++) {
    if (impar % 2 != 0) {
        document.write(impar + "<br>"); 
        console.log(impar)
    }
}
//4- Criar um loop que conte todos os números pares de 0 a 100
console.log("---------------------------Números pares de 0 até 100---------------------");
document.write("<p>//4- Criar um loop que conte todos os números pares de 0 a 100</p>");
let par = 0;
while (par <= 100){
    if (par % 2 == 0) {
        document.write(par + "<br>"); 
        console.log(par);
    }
    par++;
}
// for (let par = 0; par <= 100; par++) {
//     if (par % 2 == 0) {
//         console.log(par)
//     }
// }