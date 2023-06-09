import React from 'react';

console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
const sum = (a: number) => {
    let currentSum = a;
    return (b: number) => {
        return currentSum = currentSum + b;
    }
}

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

/*const makeCounter = () => {
    let count = 0;
    return () => {
        return ++count;
    }
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
const counter2 = makeCounter();
console.log(counter2()) // 1
console.log(counter())  // 3*/

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

/*const makeCounter = (num: number) => {
    let startValueCount = num;
    let counterMethods = {
        increase() {
            ++startValueCount
            return startValueCount
        },
        decrease() {
            --startValueCount
            return startValueCount
        },
        reset() {
            startValueCount = 0
            return startValueCount
        },
        set() {
            startValueCount = num
            return startValueCount
        },
        showCount() {
            console.log(startValueCount)
            return startValueCount
        }

    }
    return counterMethods
}
let counter = makeCounter(4)

console.log(counter.set())*/


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10


const superSum = (num: number) => {

}

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

/*const sumTo = (n: number): number => {
    if (n <= 1) {
        return 1

    } else {
        return n + sumTo(n - 1)
    }
}
console.log(sumTo(1))
console.log(sumTo(2))
console.log(sumTo(3))
console.log(sumTo(4))
console.log(sumTo(100))*/

/*const factorial = (n: number): number => {
    if (n < 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(5));*/

/*
const fib = (n: number): number => {
    if (n <= 1) {
        return n
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}
*/


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

/*const printList = (list: any) => {
    alert(list.value);
    if (list.next) {
        printList(list.next);
    }
}
printList(list)*/

const printReverseList = (list: any) => {
    if (list.next) {
        printReverseList(list.next)
    }
    alert(list.value)
}
printReverseList(list)


// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug export default () => {};