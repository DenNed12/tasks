// Задание 1

function evenNumFinder() {
    const a= [1,2,2,3,5,NaN,null,'string',12,13,23,24,56]
    let even = 0,
        zero = 0,
        odd = 0;


    for (let i; i < a.length; i++) {
        if (typeof a[i] == 'number' && !isNaN(a[i])){
            if (a[i]===0) {
                zero += 1;
            } else if (a[i]%2 === 0) {
                even += 1;
            }else {
                odd +=1
            }
        }
    }
    console.log('even numbers: ', even)
    console.log('odd numbers: ', odd)
    console.log('zero: ', zero)
}

//Задание 2


function func(n) {
    let isPrime = true;
    if (n > 3 && n <= 1000) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime === true) {
        console.log(`Число ${n} простое`);
    } else {
        console.log(`Число ${n} составное`);
    }
}

func(6);


// Задание 3
function sum(n) {
    return function(m) {
        return n+m
    }

}
// Задание 4
function countNums(start, end) {
    let current = start;

    let time = setInterval(function() {
        console.log(current);
        if (current === end) {
            clearInterval(timerId);
        }
        current++;
    }, 900);


// Задание 5
const foo = (x,n) => {
    var res = x
    for (let i; i<n; i++){
        res *= x
    }
    return res;
}
const result = foo(3,2)
console.log(result)