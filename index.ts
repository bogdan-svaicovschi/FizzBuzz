import process from 'process';
import * as readline from 'readline'

export class FizzBuzzModifiers {
    private _fizz: boolean;
    private _buzz: boolean;
    private _bang: boolean;
    private _bong: boolean;
    private _fezz: boolean;
    private _rev: boolean;
    
    constructor(fizz: boolean = false, buzz: boolean = false, bang: boolean = false, bong: boolean = false, fezz: boolean = false, rev: boolean= false){
        this._fizz = fizz
        this._buzz = buzz
        this._bang =bang
        this._bong = bong
        this._fezz = fezz
        this._rev = rev
    }
    
    
    public get fizz() : boolean {return this._fizz}
    public get buzz() : boolean {return this._buzz}
    public get bang() : boolean {return this._bang}
    public get bong() : boolean {return this._bong}
    public get fezz() : boolean {return this._fezz}
    public get rev() : boolean {return this._rev}

}

export function getModifiersFromArgs(args: string[]) : FizzBuzzModifiers {
    if (args.length === 0){
        return new FizzBuzzModifiers()
    }
    const fizz = args.includes("fizz")
    const buzz = args.includes("buzz")
    const bang = args.includes("bang")
    const bong = args.includes("bong")
    const fezz = args.includes("fezz")
    const rev = args.includes("rev")
    
    return new FizzBuzzModifiers(fizz, buzz, bang, bong, fezz, rev)
}

export function fizzbuzz(maxIterations: number, modifiers: FizzBuzzModifiers): string {
    let result : string = "";
    for (let i = 1; i <= maxIterations; i ++) {
        const output: String[] = [];
        if (modifiers.fizz && i % 3 == 0) {
            output.push("Fizz");
        }
        if (modifiers.buzz && i % 5 == 0) {
            output.push("Buzz");
        }
        if (modifiers.bang && i % 7 == 0) {
            output.push( "Bang");
        }
        if (modifiers.bong && i % 11 == 0 ) {
            output.splice(0, output.length);
            output.push("Bong");
        }
        if (modifiers.fezz && i % 13 == 0) {
            if (output.find(el => el == "Fizz") != undefined) {
                output.splice(1, 0, "Fezz");
            } else {
                output.splice(0, 0, "Fezz");
            }
        }
        if (modifiers.rev && i % 17 == 0) {
            output.reverse();
        }

        if (output.length == 0) {
            console.log(i);
            result += `${i} `
        } else {
            const outputString : string = output.join("");
            console.log(outputString);
            result+= `${outputString} `
        }

    }
    return result;

}

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.question("Max Iterations for fizzbuzz: ", (input: string) => {
    const maxIterations = parseInt(input);
    const args = process.argv.splice(2)
    const modifiers = getModifiersFromArgs(args);
    fizzbuzz(maxIterations, modifiers);
    rl.close();
})
