//if else q1
let number=(prompt('enter a number'))
if (number%2==0){
    console.log('even number')
}
else
{
    console.log('not an even number')
}

//q2
let number2=(prompt('enter a number'))
let number3=(prompt('entera second number'))
if(number2>number3){
    console.log('the first number is bigger')
}
else if (number2<number3){
    console.log('the second number is bigger')
}
else {
    console.log('both are the same')
}

//q3
let number4=(prompt('enter a number'))
let number5=(prompt('enter a second number'))
let number6=(prompt('enter a third number'))
if (number4>number5){
    if (number4>number6){
        console.log(number4,'is a bigger number')
    }
}
if (number5>number4){
    if (number5>number6){
        console.log(number5,'is a bigger number')
    }
}
if (number6>number4){
    if (number6>number5){
        console.log(number6,'is a bigger number')
    }
}
//q4
let side1=(prompt('enter side1'))
let side2=(prompt('enter side2'))
let side3=(prompt('enter side3'))
if (side1==side2){
    if (side2==side3){
        console.log('it is a Equilateral triangle')
    }
}
if (side1!=side2){
    if (side1!=side3){
        if (side2!=side3){
            console.log('it is a Isosceles triangle')
        }
    }
}