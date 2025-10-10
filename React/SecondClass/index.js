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


let numbers = [2 ,3, 6, 8, 16,15 , 20];
let final=[];
numbers.forEach((a , b) => {
    if(b % 2)
    {
        final.push(a * 2);
    }
    else{
        final.push(a * 5);
    }
})

console.log(final);