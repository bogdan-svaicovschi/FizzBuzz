function fizzbuzz(): void {

    for (let i = 1; i <= 200; i ++) {
        const output: String[] = [];
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
            output.splice(0, output.length);
            output.push("Bong");
        }
        if (i % 13 == 0) {
            if (output.find(el => el == "Fizz") != undefined) {
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

}

fizzbuzz();
