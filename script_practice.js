/*const array1=["apple","mango","banana"]
for(let i=0;i<=2;i++){
    console.log(array1[i]);
} */

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";
}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
console.log("My father is " + myFather.age + ". My mother is " + myMother.nationality);
 
/*async function delay(){
    console.log("Start");
    await new Promise(resolve => setTimeout(resolve,2000));
    console.log("after some time");
    console.log("end");
}
delay();*/