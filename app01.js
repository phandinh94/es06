// -------------------- Bai 1 ----------------------------------
// (function IIFE() { 
//     function foo(x) {
        // var y = x * 2;
        // return function bar(z) { if (z.length > 3) {
        //     return z.map(function baz(v) {
        //          if (v > 3) return v + y; else return baz(v * 4);
        //         });
        //     } else {
        //         var obj = [];
        //         setTimeout(
        //           function bam() {
        //             obj.length = 1;
        //             obj[0] = this.w; 
        //         }.bind(this),100);
        //             return obj;
        //     }
        // };
    // }
// var p = foo(2);
// var list1 = [1, 3, 4];
// var list2 = list1.concat(6);
// list1 = p.call({ w: 42 }, list1); list2 = p(list2);
// setTimeout(function() { 
//     console.log(list1[0] === list2.reduce(function(s, v) {
//         return s + v; }, 0)
//         );
//     }, 200); 
//  })();
// ------ bai lam ----------
// (function IIFE() { 
//     function foo(x) {
//         let y = x * 2;
//         return (z)=>{
//             if (z.length > 3) {
//                 return z.map((v)=> {
//                  if (v > 3) {
//                     return v + y;
//                 } else{
//                     return (v * 4);
//                 } });
//             } else {
//                 let obj = [];
//                 setTimeout( 
//                     function bam() {
//                     obj.length = 1;
//                     obj[0] = this.w; 
//                 }. bind(this),100);
//                     return obj;
//             }
//         };
//     }
// let p = foo(2);
// let list1 = [1, 3, 4];
// let list2 = list1.concat(6);
// list1 = p.call({ w: 42 }, list1); 
// list2 = p(list2);
// setTimeout(() =>{ 
//     console.log(list1[0] === list2.reduce((s, v)=> {
//         return s + v; 
//      }, 0));
//     }, 200); 
//  })();
// // 
// // 


// -----------------------------------------------------------
// Bai 2
// var x=2, fns = [];
//  (function() {
//  var x=5;
//  for(var i=0;i<x;i++){ 
// ..
//  })();
// // DO NOT MODIFY BELOW CODE
// console.log(x * 2 === fns[x * 2]()); // true

// -------Bài làm----------
// let x = 2, fns = [];
// (function() {
//      let x = 5;
//      for(let i = 0;i < x;i++){ 
//         fns[i]= ()=>i
//     }
// })();
// console.log(x * 2 === fns[x * 2]()); // true

// --------------------------Bài 3-------------------------------------

// function foo() {};
// function bar(){
// var a1 = [2, 4];
// var a2 = [6, 8, 10, 12];

// return foo();
// }
// DO NOT MODIFY BELOW CODE
// console.log(bar().join('') === '281012'); // true
// ----------Bài làm----------------

function foo() {
   
};
function bar(){
let a1 = [2, 4];
let a2 = [6, 8, 10, 12];
}
console.log(bar().join('') === '281012');

// ------------------- Bai 4-----------------------------
function ajax(url, cb) { // fake ajax response:
    cb({
        foo: 2,
        baz: [6, 8, 10], bam: {
        qux: 12 
    }
    }); 
}
    function check(data) {
         console.log(
            56 === 
            data.foo +
            data.bar + 
            data.baz[0] + 
            data.baz[1] + 
            data.baz[2] + 
            data.bam.qux +
            data.bam.qam
         );
    }
    var defaults = {
        foo: 0,
        bar: 4,
        bam: { 
            qux: 0,
            qam: 14 
        }
    }; 
        // YOUR CODE HERE
        // function response(...) { 
        //     check(...); // true
        //  }
        // DO NOT MODIFY
        ajax('http://fun.tld', response);
// --------------------Bai 5------------------------------
// function upper(strings, ...values) {}
// let name = 'Nguyen Van A',
//  account = 'ANV',
//  classname = 'Fresher FrontEnd';
// console.log(
//     `Hello (@ ), welcome to the !!!` === 
//     `Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!`
//     );
// ----------- Bai lam-----------------
// function upper(strings, ...values) {
//   return strings.toUpperCase();
// }
// var name = "Nguyen Van A",
//   account = "ANV",
//   classname = "Fresher FrontEnd";
// console.log(
//   `Hello ${upper(name)} (@${upper(account)}), welcome to the ${upper(
//     classname
//   )}!!!` === "Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!"
// );
 