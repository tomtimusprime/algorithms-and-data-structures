const fizzbuzz = (n) => {
    
    // for (let number of n) {
    //     if(number % 3 === 0) {
    //         console.log("fizz");
    //     }
    //     else if(number % 5 === 0) {
    //         console.log("buzz");
    //     }
    //     else if(number % 5 === 0 || number % 3 === 0) {
    //         console.log("fizzbuzz");
    //     }
    //     else {
    //         console.log(number);
    //     }
    // }

    for (let i = 1; i <= n; i++) {
        //is the number a multiple of 3 and 5?
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        }
        else if(i % 3 === 0) {
            console.log("fizz");
        }
        else if(i % 5 === 0) {
            console.log("buzz");
        }
        else {
            console.log(i);
        }
    }
}

//C# translation

// string fizzbuzz(int num){
//     string str = "";
//     for(var i = 0; i < num; i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             str = "FizzBuzz";
//         } else if( i % 3 == 0){
//             str = "Fizz";
//         } else if (i % 5 == 0){
//             str = "Buzz";
//         } else {
//             str = i.ToString();
//         }
//         Console.WriteLine(str);
//     }
//     return str;
// }

fizzbuzz(100);