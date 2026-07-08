import {fizzbuzz, FizzBuzzModifiers} from './index.ts'
test('fizzbuzz returns "Fizz" for 3rd iteration', () => {
  expect(fizzbuzz(3, new FizzBuzzModifiers(true, true,true,true,true,true))).toBe('1 2 Fizz ');
});
test('fizzbuzz returns "Buzz" for 5th', () => {
  expect(fizzbuzz(5, new FizzBuzzModifiers(true, true,true,true,true,true))).toBe('1 2 Fizz 4 Buzz ');
});

test('fizzbuzz returns "Bang" for 7th', () => {
  expect(fizzbuzz(7, new FizzBuzzModifiers(true, true,true,true,true,true))).toBe('1 2 Fizz 4 Buzz Fizz Bang ');
});

test('fizzbuzz returns "Bong" for 11th', () => {
  expect(fizzbuzz(11, new FizzBuzzModifiers(true, true,true,true,true,true))).toBe('1 2 Fizz 4 Buzz Fizz Bang 8 Fizz Buzz Bong ');
});

test('fizzbuzz returns "Fezz" for 13th iteration', () => {
  expect(fizzbuzz(13, new FizzBuzzModifiers(true, true,true,true,true,true))).toBe('1 2 Fizz 4 Buzz Fizz Bang 8 Fizz Buzz Bong Fizz Fezz ');
});

test('fizzbuzz returns "Fezz" for 17th iteration', () => {
  expect(fizzbuzz(17, new FizzBuzzModifiers(true, true,true,true,true,true))).toBe('1 2 Fizz 4 Buzz Fizz Bang 8 Fizz Buzz Bong Fizz Fezz Bang FizzBuzz 16 17 ');
});

test('fizzbuzz returns "Bong" for 30th', () => {
  expect(fizzbuzz(30, new FizzBuzzModifiers(true, true,true,true,true,true))).toBe('1 2 Fizz 4 Buzz Fizz Bang 8 Fizz Buzz Bong Fizz Fezz Bang FizzBuzz 16 17 Fizz 19 Buzz FizzBang Bong 23 Fizz Buzz Fezz Fizz Bang 29 FizzBuzz ');
});