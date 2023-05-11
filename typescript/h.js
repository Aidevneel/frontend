// function person(fname,lname){
//     var firstname = fname;
//     let lastname = lname;
  
//     this.getDetails_noaccess = function(){
//         return (`First name is: ${firstname} Last 
//             name is: ${lastname}`);
//     }
  
//     this.getDetails_access = function(){
//         return (`First name is: ${firstname}, Last 
//             name is: ${lastname}`);
//     }
// }
// let person1 = new person('Mukul','Latiyan');
// console.log(person1.firstname);
// console.log(person1.getDetails_noaccess());
// console.log(person1.getDetails_access());


// Inheritance example
class person{
    constructor(name){
        this.name = name;
    }
    // method to return the string
    toString(){
        return (`Name of person: ${this.name}`);
    }
}

class student extends person{
    constructor(name,id){
        // super keyword for calling the above 
        // class constructor
        super(name);
        this.id = id;
    }
    toString(){
        return (`${super.toString()},
        Student ID: ${this.id}`);
    }
}
let student1 = new student('Mukul',22);
console.log(student1.toString());