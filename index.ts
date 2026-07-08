
// This is our main function
function fizzbuzz(): void {
    // for(let i = 0; i < 100; i++) {
    //     let output : String = "";
    //    if (i % 3 == 0) {
    //     output += "Fizz";
    //    }
    //    if (i % 5 == 0) {
    //     output += "Buzz";
    //    }
    //    if (i % 7 == 0) {
    //     output += "Bang";
    //    }
    //    if (i % 11 == 0) {
    //      output = "Bong";
    //    }
    //    if (i % 13 == 0) {
        
    //    }
    //    if (output == "") {
    //     console.log(i);
    //    } else {
    //     console.log(output);
    //    }
    // }
    for (let i = 1; i <= 200; i ++) {
        let output: String[] = [];
        if (i % 3 == 0) {
            output.push("Fizz");
        }
        if (i % 5 == 0) {
            output.push("Buzz");
        }
        if (i % 7 == 0) {
            output.push( "Bang");
        }
        if (i % 11 == 0 ) {
            output = [];
            output.push("Bong");
        }
        if (i % 13 == 0) {
            const found = output.find(el => el == "Fizz");
            if (found != undefined) {
                output.splice(1, 0, "Fezz");
            } else {
                output.splice(0, 0, "Fezz");
            }
        }
        if (i % 17 == 0) {
            output.reverse();
        }

        if (output.length == 0) {
            console.log(i);

        } else {
            console.log(output.join(""));
        }


    }
    // Put your code here...
}
// Now, we run the main function:
fizzbuzz();
console.log("Functie");