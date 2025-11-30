// let family = new Array("Akshat","manveer" , "Tanveer");





// console.log(family);

// let cousins = new Array("Sidhant" , "Mrinalini", "Mani");
// console.log(cousins);

// let friends = new Array("Ayush", "Aneesh" ,"Soumya");
// console.log(friends);

// let arMembers = family.concat(cousins,friends);
// console.log(arMembers);

// let numbers = [2, 4, 6, 8 , 10 ];

// let even = numbers.every((x) => x % 2 == 0);
// console.log(even);


// let names  = ["Cat" , "mat", "bat", "sat"];
// console.log(names.length);

// let result  = names.every((name) => name.length == 3);

// console.log(result);


// let names =["Ram", "Shyam" ,"Seeta" ,"Geeta"];
// console.log(names[2]);
// console.log(names.lenght);
// names.push("puneet");
// console.log(names);
// names.pop([2]);
// console.log(names);
// names.shift("Ram");
// console.log(names);
// names.unshift("Ram");
// console.log(names);

// let statement = "We are students of lovely professional univeristy";
// let update = statement.split(" ");
// console.log(update);

// let update2 = update.join(" ");
// console.log(update2);



// let numbers = [1 ,2, 4,8,16 ,32,64, 128 , 256 , 512 , 1024];

// let result= numbers.filter((num) => num > 50);
// console.log(result);


// let numbers = [2 ,4,5, 7,9,10, 12,14,16,17,18];
// let result = numbers.filter((num) => num %3 ==0);
// console.log(result);



// OBJECT

// let data = [
//     {
//         name : "Lovely Professional Univerisyt",
//         Subject: "React",
//         fees: 300000,
//         Uniform: false
//     },
//     {
//         name : "Chandigarh",
//         Subject: "express",
//         fees: 200000,
//         Uniform: true
//     },
//     {
//         name : "Bits Pilani",
//         Subject: "MongoDb",
//         fees: 2000000,
//         Uniform: false
//     },
//     {
//         name : "IIT",
//         Subject: "Angular",
//         fees: 50000,
//         Uniform: true
//     }
// ]

// console.log(data);

// let expensive = data.filter((x) => x.fees >= 50000);
// console.log(expensive);




// let numbers = [2 ,3, 6, 8, 16,15 , 20];
// let final=[];
// numbers.forEach((a , b) => {
//     if(b % 2)
//     {
//         final.push(a * 2);
//     }
//     else{
//         final.push(a * 5);
//     }
// })

// console.log(final);



// MAP Function TWO METHODS-----––––––--------–––––––––––––––––––––––––/

// let nums = [3 ,4,5,6,18,12,5,12,16];
// nums.map(work);

// function work(x ,y)
// {
//     console.log(x , " : " , y);
// }


// SECOND METHOD ––––––––––––––––––––––––––
// nums.map((x , y) => console.log(x , " : " , y));

// nums.reverse();
// console.log(nums);
// console.log(nums.length);



//STRING TOUPPERCASE AND TOLOWERCASE--–––––––––––––––––––––––––––––––––––––––––––––––––––/

// let friends = ["Ram", "Shyam" ,"krishan", "Laxman"];
// friends.map((x ,y) => console.log(x.toUpperCase()));
// console.log(" ");
// friends.map((x,y) => console.log(x.toLowerCase()));




// let fruits = ['Mango','Apple' ,'Kiwi','papaya'];


// let result= fruits.find(x => x == 'Apple');
// console.log(result);

//ARRAY.FROM()-––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––///

// let nums = [3 ,7 ,48,87 , 29, 3 , 48 , 57 , 7, 48 ];
// let unique = Array.from(new Set(nums)); 
// let unique1 = new Set(nums); //RETURNS AN OBJECT
// console.log(unique);




// let str = "welcome to lpu";
// console.log(Array.from(str));
// let sum = 0;
// for(i = 0 ; i< nums.length;i++)
// {
//     sum+=nums[i];
// }
// console.log(sum);

// nums.forEach((x) => sum+=x);
// console.log(sum);


// nums.every((x)=> sum = sum+x);
// console.log(sum);

// REDUCE FUNCTION ––––––––––––––––––––––––––––––––––––––––––––––––––––––––÷

// let nums = [3 ,7 ,48,87 , 29, 3 , 48 , 57 , 7, 48 ];

// // let sum = nums.reduce((x, y) =>  x + y, 100);//(X is accumulator that carroes the value cumulative and y is the current value and 0 is the intial value)

// // console.log(sum);

// // SPREAD OPERATOR ... –––––––––––––––––––––––––––––––––––––––––––––––––––––––––÷÷÷

// let friends = ["Ram" ,"Shyam", "Krishna"];
// let family = ["Akshat" ,"Manveer" ,"Tanveer"];
// // console.log(nums,friends);

// console.log(...family, ...friends, ...nums);



// let fruits = ["Mango", "Apple" ,
//  "Guava",
//  "kiwi"
// ]

// console.log(fruits);

// let [a ,b, c ,d] = fruits;

// console.log(a ,b, c,d);





// const form = document.getElementById("myForm");
// const nameIn = document.getElementById("name");
// const email = document.getElementById("email");
// const number = document.getElementById("number");
// const outputDiv = document.getElementById("output");
// const submit = document.getElementById("sub");
// form.addEventListener("submit", function(e) {
//     e.preventDefault(); 


//     outputDiv.innerHTML = `
//         <p>Name: ${nameIn.value}</p>
//         <p>Email: ${email.value}</p>
//         <p>Number: ${number.value}</p>
//     `;
// });
