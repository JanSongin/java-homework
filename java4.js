//q1
let x = Math.floor(Math.random() *3)+1;
let rock = 1;
let paper = 2;
let scissors = 3;
let choice=(prompt('rock,paper,scissors'));
let compoption ="";
switch (x){
case 1:
    compoption = "rock"
break;
case 2:
    compoption = "paper"
break;
case 3:
    compoption = "scissors"
break;
}
if (compoption==choice){
    console.log("draw");
}
if((compoption=="rock")&&(choice=="paper")){
    console.log("you win");
}
else if ((compoption=="rock")&&(choice=="scissors")){
    console.log("you lose");
}
else if ((compoption=="paper")&&(choice=="scissors")){
    console.log("you win");
}
else if ((compoption=="paper")&&(choice=="rock")){
    console.log("you lose");
}
else if ((compoption=="scissors")&&(choice=="rock")){
    console.log("you win");
}
else if ((compoption=="scissors")&&(choice=="paper")){
    console.log("you lose");
}

//q2
level=prompt("enter your level higher or ordinary");
switch (level){
    case "higher":
        grade=prompt("what is your grade h1-h8");
        subject=prompt("what subject");
        switch(grade){
            case "h1":
                console.log("you got 100% in",subject);
                break;
            case "h2":
                console.log("you got 90% in",subject);
                break;
             case "h3":
                console.log("you got 80% in",subject);
                break;
            case "h4":
                console.log("you got 70% in",subject);
                break;
            case "h5":
                console.log("you got 60% in",subject);
                break;
            case "h6":
                console.log("you got 50% in",subject);
                break;
            case "h7":
                console.log("you got 40% in",subject);
                break;
            case "h8":
                console.log("you got 0% in",subject);
                break;
        }
        break;
    case "ordinary":
        grade=prompt("what is your grade o1-o8");
        subject=prompt("what subject");
        switch(grade){
            case "o1":
                console.log("you got 100% in",subject);
                break;
            case "o2":
                console.log("you got 90% in",subject);
                break;
             case "o3":
                console.log("you got 80% in",subject);
                break;
            case "o4":
                console.log("you got 70% in",subject);
                break;
            case "o5":
                console.log("you got 60% in",subject);
                break;
            case "o6":
                console.log("you got 50% in",subject);
                break;
            case "o7":
                console.log("you got 40% in",subject);
                break;
            case "o8":
                console.log("you got 0% in",subject);
                break;
        }
        break;
}