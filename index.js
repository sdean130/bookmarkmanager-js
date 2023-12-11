// Let Example
// let age = 20;
// console.log(age);

// let myAge = 25;
// console.log(myAge);

// myAge = 35;
// console.log(myAge);

// // Constant Example
// const score = 10;
// console.log(score); 

// /*Not Recommended to use*/
// // var year = 2025;
// // console.log(year);



/* Strings */
// let myName = "Seth Dean - 26 - CSE $ % ^";
// console.log(myName);

// let myBool = true;
// console.log(myBool);

// let firstName = "Seth";
// let lastName = "Dean";
// let random = "Learning JavaScript";

// console.log(firstName.startsWith("s"));
// console.log(firstName.endsWith("h"));

// console.log(firstName.toUpperCase());
// console.log(lastName.toLowerCase());

// console.log(firstName.indexOf("h"));
// console.log(firstName.lastIndexOf("h"));

// console.log(firstName.replace("h", "-"));
// console.log(firstName.replaceAll("h", "-"));

// console.log(firstName);

// console.log(random.substring(0, 3));
// console.log(random.substring(9, 19));

// console.log(random.slice(0, 8));
// console.log(random.slice(9, 19));

// let random = firstName.toUpperCase();
// console.log(random);

// console.log(lastName.toLowerCase());

// let firstNameLength = firstName.length;
// console.log(lastName.length);

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// console.log(firstName, lastName);

// console.log(lastName[1]);



// /* Numbers */
// let radius = 15;
// const pi = 3.14;
// let random = "XYZ";

// let result = "My radius is " + radius + " and Value of PI is " + pi;
// console.log(result);

// let result = radius + pi; // can replace the + with: -, *, /, **, %
// console.log(result);

// let area = 15*(20-18)**3;
// console.log(area);

// radius -= 5; // can use += instead and will add the num to the current val
// console.log(radius);



// /* Template Literal */
// let longPara = `Long Form Content!`;

// let firstName = "Seth";
// let lastName = "Dean";
// let videos = 10;
// let subscriber = 4500;

// let result = "YouTube Channel " + firstName + " " + lastName + " has " + videos + " videos and " + subscriber + " subscribers!";
// console.log(result);

// let result = `YouTube Channel ${firstName} ${lastName} has ${videos} videos and ${subscriber} subscribers!`;
// console.log(result);

// let htmlTemplate = `<h1>${firstName} ${lastName}</h1>
// <p>Videos: ${videos}</p>
// <p>Subscribers: ${subscriber}</p>`;

// console.log(htmlTemplate);



/* Arrays */
// let items = ["bread", "butter", "salt", "jam"];
// let update = ["pizza", "water"];

// let itemsMethod = items.join(", ");
// let itemsMethod = items.indexOf("bread");
// let itemsMethod = items.concat(["water", "bottle"]);

// let itemsMethod = items.push("water");
// console.log(itemsMethod);
// console.log(items);

// let itemsMethod = items.pop("jam");

// items[3] = "pizza";

// console.log(items[3]);
// console.log(items.length);
// console.log(items.join(", "));
// console.log(itemsMethod);
// console.log(items);



/* Null and Undefined */
// let score = 7

// let update = null;
// console.log(update);

// let year;
// console.log(year);

// console.log(year, year + 20, `My score is ${year}`);



/* Booleans and Comparison*/
// let value = [true, false, "true", "false"];
// console.log(value);

// let email = "seth@gmail.com"
// console.log(email.includes("seth"));

// let students = ["alex", "john", "deepak", "tanvi"];
// console.log(students.includes("mark"));

// let age = 25;
// console.log(age == 35); // == comparison, = assign
// console.log(age == 25);

// console.log(age != 53);

// console.log(age > 35);
// console.log(age < 35);
// console.log(age >= 25);
// console.log(age <= 20);

// console.log("abc" > "ABC");



/* LOOPS! */
// let students = ["shubham", "alex", "mark", "deepak"];

// for(let count = 0; count < 5; count++) {
//     console.log("Hello!");
//     console.log(count);
// }

// for(let i = 0; i < students.length; i++){
//     console.log(students[i]);
// }

// const students = ["shubham", "alex", "mark", "deepak"];
// students[6] = "harvey";

// for(let index of students) {
//     console.log(index);
// }

// const student = {
//     username: "seth",
//     age: 26
// }

// for(let key in student) {
//     console.log(student[key]);
// }

// const username = "seth";

// for(let char in username) {
//     console.log(char);
// }


// let count = 0;
// while(count < students.length){
//     console.log(students[count]);
//     count++;
// }

// let count = 15;
// do {
//     console.log(count);
//     count++;
// }
// while(count < 5);

// console.log("Out of loop!");



/* Switch case*/

// let rating = 6;

// switch(rating) {
//     case 5:
//         console.log("Must Watch");
//         break;
//     case 4:
//         console.log("Good option");
//         break;
//     case 3:
//         console.log("Maybe");
//         break;
//     case 2:
//         console.log("Skip");
//         break;
//     case 1:
//         console.log("Ignore");
//         break;
//     default:
//         console.log("Invalid");
//         break;
// }



/* SCOPE */

// // var ignores scope, let and const follows scope
// let score = 70;

// if(score < 80){
//     let inside80 = 80;
//     console.log("Inside < 80 Block", inside80); // Local Scope

//     if(score > 65){
//         console.log("Inside > 65", inside80);
//     }
// }

// console.log("Global", inside80); // Global Scope



/* Ternary Operator */
// const user = true;

// user ? console.log("true value") : console.log("false value");

// const username = "setffff";

// username.length >= 5 ? console.log("Above 5!") : console.log("Not Long enough");

// const result = username.length >= 5 ? username.length : 0;

// console.log(result);



/* Functions */
// function addition(num1, num2){
//     return num1 + num2;
// }

// let result = addition(2, 5);
// console.log(result);

// function intro() {
//     console.log("Welcome to the course!");
// }

// intro();

// let intro = function() {
//     console.log("Welcome to the course!");
// }

// intro();

// // This value being passed here is called the 'Parameter'
// function welcome(username) {
//     console.log(`Welcome ${username} !`)
// }

// // This value being passed is called an 'Argument'
// welcome("Seth");

// function addition(numOne, numTwo) {
//     let result = numOne + numTwo;
//     return result;
//     // console.log(result);
// }

// const result = addition(5, 2);
// console.log(result);

// function fullName(firstName, lastName) {
//     let result = firstName + " " + lastName;
//     return result;
//     // console.log(`Welcome ${firstName} ${lastName} !`)
// }

// // fullName("Seth", "Dean");
// let value = fullName("Seth", "Dean");
// console.log(value);

// fullName(10, 5);

// let intro = (name) => {
//     console.log("Welcome", name);
// };

// intro("Seth");

// let add = (numOne, numTwo) => numOne + numTwo;
// console.log(add(3, 6));

// let welcome = name => `WELCOME ${name}`;
// console.log(welcome("Seth"));

// let intro = () => `Welcome`;
// console.log(intro());

// let myName = "Seth";
// console.log(myName.toLowerCase());

// let students = ["alex", "deepak"];
// console.log(students.push("john"));

// let add = function(a, b){
//     return a+b;
// }
// let mul = (a, b) => a * b;

// function calculator(numOne, numTwo, add, mul) {
//     let addResult = add(numOne, numTwo);
//     let mulResult = mul(numOne, numTwo);
//     let result = `Add: ${addResult}, Mul: ${mulResult}`;

//     console.log(result);
// }

// calculator(5, 10, add, mul);



/* FOREACH */
// let products = ["bread", "butter", "jam", "bottle"];

// products.forEach(product => console.log(product.length)); // remove () if only one parameter, remove {} if only one line of code
// let callback = (product) => console.log(`My product name is ${product}`);
// products.forEach(callback);

// products.forEach(product => {
//     console.log(product);
// });

// let students = ["alex", "john", "deepak", "tavi"];

// students.forEach((student, index) => {
//     console.log(student, index);
// });

// const printStudent = (student, index) => {
//     console.log(student, index);
// }

// let users = ["seth", "alex", "deepak", "shubham"];



/* Objects */

// let user = {
//     name: "Seth Dean",
//     age: 26,
//     email: "sdean130@outlook.com",
//     isLoggedIn: false
// };

// user.isLoggedIn = true;
// console.log(user.isLoggedIn);

// console.log(user["age"]);

// let key = "email";
// console.log(user[key]);

// console.log(typeof user);



/* Methods */
// let random = "RANDOM";
// let user = {
//     name: "Seth Dean",
//     age: 26,
//     email: "sdean130@outlook.com",
//     isLoggedIn: false,
//     login: function(nickName){
//         return `LOGIN ${nickName}, ${this.name}`;
//     },
//     logout(){
//         return "LOGOUT";
//     }
// };

// console.log(user.login("SD"));
// console.log(user.logout());
// console.log(random.toLowerCase());


/* THIS */
// let user = {
//     name: "Seth Dean",
//     age: 26,
//     email: "sdean130@outlook.com",
//     isLoggedIn: false,
//     login(){
//         this.isLoggedIn = true;
//         return `LOGGED IN - ${this.isLoggedIn}`;
//     },
//     logout(){
//         this.isLoggedIn = false;
//         return `LOGGED OUT - ${this.isLoggedIn}`;
//     }
// };


// console.log(user.login());
// console.log(user.logout());
// console.log(this);



/* OBJECT IN ARRAY */
// let users = [{}, {}, {}, {}]

// let user = {
//     name: "Seth Dean",
//     age: 26,
//     email: "sdean130@outlook.com",
//     isLoggedIn: false,
//     blogs: [
//         {title: "Blog 1", numComment: 5, wordCount: 540}, 
//         {title: "Blog 2", numComment: 20, wordCount: 200}
//     ],
//     allBlogConsole(){
//         this.blogs.forEach(blog => console.log(blog.title));
//     },
//     login(){
//         this.isLoggedIn = true;
//         return `LOGGED IN - ${this.isLoggedIn} - ${this.email}`;
//     },
//     logout(){
//         this.isLoggedIn = false;
//         return `LOGGED OUT - ${this.isLoggedIn}`;
//     }
// };

// console.log(user.blogs[0]);
// user.allBlogConsole();



/* MATH OBJECTS */
// const num = 15.3;

// console.log(Math);

// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));

// console.log(Math.pow(2, 7));
// let random = Math.random() * 100;
// console.log(Math.round(random));



/* Primitive vs Ref type */
// let numOne = 15; 
// let numTwo = numOne;
// numOne = 30;

// console.log(numOne);
// console.log(numTwo);

// let objOne = {title: "Learning JS", rank: 2};
// let objTwo = objOne;
// objOne["rank"] = 1;

// console.log(objOne);
// console.log(objTwo);

// let objOne = {title: "Learning JS", rank: 2};
// let objTwo = {...objOne, publish: "22-02-2025"};
// objOne["rank"] = 1;

// console.log(objOne);
// console.log(objTwo);

// let arrOne = ["shubham", "alex"];
// let arrTemp = ["john", "ABC"]
// let arrTwo = [...arrOne, ...arrTemp, "XYZ"];
// arrOne.push("seth");

// console.log(arrOne);
// console.log(arrTwo);



// let description = document.querySelectorAll('div p');
// console.log(description)



/* Selector */
// let selector = document.getElementById("website-name");
// console.log(selector);

// let selectorClass = document.getElementsByClassName("active");
// console.log(selectorClass);

// let selectorTag = document.getElementsByTagName("p");
// console.log(selectorTag);

// let subHeading = document.querySelector(".sub-heading");
// subHeading.innerText += "--- Updated Sub Heading! ---";
// console.log(subHeading);

// let liHead = document.querySelectorAll("ul.top-nav li");
// liHead.forEach((element) => {
//     element.innerHTML += "--";
// });
// console.log(liHead);

// let subHeading = document.querySelector("ul.top-nav");
// subHeading.innerHTML += "<li>Register</li>";
// console.log(subHeading);

// const link = document.querySelector("a");
// link.setAttribute('href', "www.example.com")
// console.log(link.getAttribute('href'));


// link.setAttribute("target", "_blank");

// const activeClasses = document.querySelectorAll(".active");
// activeClasses.forEach(active => {
//     console.log(active.getAttribute("class"));
//     active.setAttribute("class", "highlight");
//     console.log(active.getAttribute("class"));
// });

// const brandName = document.querySelector("#website-name");
// brandName.setAttribute("style", "color: blue;");

// const brandName = document.querySelector("#website-name");
// console.log(brandName.style.margin);
// brandName.style.margin = "50px";
// console.log(brandName.style.margin);

// brandName.style.fontSize = "100px";
// console.log(brandName.style.fontSize);
// brandName.style.color = "blue";



/* Add/Remove Classes */
// const heading = document.querySelector("h1");
// console.log(heading.classList);
// heading.classList.add("highlight");
// heading.classList.remove("blog-heading");

// const activeClasses = document.querySelectorAll("li.active");
// const inActiveClasses = document.querySelectorAll("li.inactive");

// activeClasses.forEach(active => {
//     active.classList.remove("active");
//     active.classList.add("inactive");
// });


// inActiveClasses.forEach(active => {
//     active.classList.remove("inactive");
//     active.classList.add("active");
// });

// const brandName = document.querySelector("#website-name");
// brandName.classList.toggle("important");




// const topNav = document.querySelector(".top-nav");
// console.log(topNav.children);

// const topNavChildren = Array.from(topNav.children);
// topNavChildren.forEach(child => {
//     child.classList.add("random");
//     console.log(child);
// });

// const brandName = document.querySelector("#website-name");
// console.log(brandName.parentElement.children);

// const blogHeading = document.querySelector(".blog-heading");
// console.log(blogHeading.nextElementSibling);
// console.log(blogHeading.previousElementSibling);



/* Events */
