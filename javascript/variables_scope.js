/*
let a = 20; //zmienna globalna
{
    let a = 30; //zmienna lokalna
    console.log('1', a); //30
}

console.log('2', a); //20
*/

/*
{
    let a = 'Ala';
    console.log('1', a); //Ala
}
{
    console.log('2', a); //error - nie ma takiej zmiennej
}

{
    let a = 'Ola'; //zmienna lokalna w tym bloku
    console.log('3', a); //Ola
}

console.log('4', a); //error: a is not defined
*/

/*
{
    let nr = 102;
    console.log(nr); //102
}
{
    console.log(nr); //błąd: nr is not defined
}
console.log(nr); //błąd: nr is not defined
*/

// var a = 20; //zmienna globalna

// function test() {
//     var a = 30; //zmienna lokalna
//     console.log('1', a); //30
// }
// test();

// console.log('2', a); //20
