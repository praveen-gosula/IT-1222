class student{
    constructor(name){
        this.name=name;
    }
    display(){
        console.log("Student name : "+this.name);
    }
}
class student1 extends student{
    constructor(name,rollno){
        super(name);
        this.rollno=rollno;

    }
    display(){
        super.display();
        console.log("Roll no : "+this.rollno);

    }
}
let s=new student1("Praveen",1222);
s.display()