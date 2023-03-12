const a = 22;
const b = "22";


if (a === b) {
    console.log("ani andrias miwere")
} else {
    console.log('ani andria kargi bichia')


}




// meore


// function weather(a) {
//     if (a == undefined) {
//         return false;
//     } else {
//         return Math.round((a - 32) * 5 / 9);
//     }
// }

// let prognozi = weather(15);

// console.log(prognozi);



//  mesame

// let operation = "*";

// function guja(a,b) {
//     if (operation === "+") {
//         return a + b;
//     }else if (operation === "-") {
//         return a - b;
//     }else if (operation === "*") {
//         return a * b;
//     }else if (operation === "/") {
//         return a / b;
//     }else {
//         return false;
//     }
// }

// const jami = guja(2, 10);

// console.log(jami)





// const operation = " ";


// const gilaki = document.getElementById("gilaki");

// function lamazi(a, b) {
//     gilaki.addEventListener("click", () => {
//         prompt(`choose: ${operation}`)
    
//         if (operation == "+") {
//             return a + b;
//         } else if (operation == "-") {
//             return a - b;
//         }else if (operation == "*") {
//             return a * b;
//         } else if (operation == "/") {
//             return a / b;
//         } else {
//             console.log("shecdomaa")
//         }
//     })
// }

// const rame = lamazi(4, 2);

// console.log(rame)





const passwordLength = function () {
    //parseInt convert a string into an integer
    const charLength = parseInt(prompt("choose: "));

    if (charLength === "+") {
        alert("Please choose a number from (0-128)");
        return passwordLength();
    }
};


