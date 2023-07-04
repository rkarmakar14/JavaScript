// console.log("Hello Rahul");
// var user = new Array("Ted","Tim","Ton","Sam","Sor","Sod");
// console.log(user.fill("Rahul",1,2));
// console.log(user.filter(string => (string != "Tim")));
// console.log(user.slice(1,2));
// console.log(user.slice(1));
// user.splice(1,2,"hi","bye");
// console.log(user);


// var user = {
//     firstName: "Rahul",
//     LastName: "karmakar",
//     role: "Admin",
//     logInCount: 32,
//     facebookSignIn: true,
//     courseCountList:[],
//     buyCourse: function (CournName){
//         this.courseCountList.push(CournName);
//     },
//     getCourseCount: function () {
//         return `${this.firstName} has enrolled the ${this.courseCountList.length} total number of coursese`;
//     }
// };
// console.log(user);
// user.logInCount = 44;
// console.log(user.logInCount);
// console.log(user.getCourseCount());
// user.buyCourse("React Js Course");
// user.buyCourse("MongoDB Course");
// console.log(user.getCourseCount());


// var counter = document.querySelector(".counter"); 
// var follower = document.querySelector(".follower");
// let count = 1;
// setInterval( () => {
//     if (count < 1000) {
//         count++;
//         counter.innerText = count;
//     }
// }, 1 );
// setTimeout( () => {
//     follower.innerText = "Instagram Followers"; 
// }, 5000);

const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const pink = document.querySelector('.pink');
const violet = document.querySelector('.violet');
const orange = document.querySelector('.orange');
const center = document.querySelector('.center');

var getColor = (colorSelect) => {
    return window.getComputedStyle(colorSelect).backgroundColor;
}
console.log(getColor(orange));

const colorChanger = (element,color) =>{
   return element.addEventListener("mouseenter",()=>{
        center.style.background = color;
    })
}
colorChanger(red,getColor(red));
colorChanger(blue,getColor(blue));
colorChanger(orange,getColor(orange));
colorChanger(pink,getColor(pink));
colorChanger(violet,getColor(violet));