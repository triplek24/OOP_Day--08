//person details in a class

class person{
    constructor(){
        this.name='karthi',
        this.age=23,
        this.address="329,kailasapuram street Rayavaram Pudukkottai",
        this.fathername="kannan",
        this.Qualification="BE CSE",
        this.exp="4 years";
    }
}
const details = new person();
console.log(details.name);
console.log(details.age);
console.log(details.address);
console.log(details.fathername);
console.log(details.Qualification);
console.log(details.exp);

//summ of numbers
class sum {
    constructor() {}

    add(num1, num2) {
        console.log(num1 + num2);
    }
    sub(num1, num2) {
        console.log(Math.absolute(num1 - num2));
    }
    mul(num1, num2) {
        console.log(num1 * num2);
    }
}



var c = new sum();
c.add(10,20)
//output 30
