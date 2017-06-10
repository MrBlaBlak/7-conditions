'use strict';

var wzrostMateusza =190;
var wzrostOlgi =190;

if (wzrostOlgi < wzrostMateusza)
    {
        console.log("Olga jest niższa :)");
    }
else if(wzrostOlgi==wzrostMateusza){
    console.log("Ten sam wzrost")
}
else{
    console.log("Marusz jest niższy lol");
}
var kolor = "zielony";

switch (kolor) {
    case 'czerwony': 
        console.log('Kolor czerwony');
        break;
    case 'zielony':
        console.log('Kolor zielony');
        console.log('znaleziono kolor');
        break;
    default:
        console.log("inny kolor");
}