//circle
const PI = 3.14;
let r=7;
let areacircle=PI*r*r;
console.log('area of circle:',areacircle);
circumference=2*PI*r;
console.log('circumference of circle:',circumference);

//rectangle
let length = 10;
let width = 10;
let arearectangle=length*width;
console.log(arearectangle);

//triangle1
let tlength = 5;
let twidth = 5;
let areatriangle=1/2*tlength*twidth;
console.log(areatriangle);

//triangle2
let a = 5;
let b = 5;
let c =(a*a+b*b)**(1/2);
console.log(c);

//cube
let cl = 10;
let cw = 10;
let ch = 10;
let areacube =cl*cw*ch;
console.log(areacube);

//cylinder
let cyr = 10;
let cyh = 10;
let areacylinder =PI*(cyr*cyr)*cyh;
console.log(areacylinder);

//sphere
let rs = 10;
let areasphere =4/3*PI*(rs*rs*rs);
console.log(areasphere);