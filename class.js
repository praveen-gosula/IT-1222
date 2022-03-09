class student{
    
    constructor(name,rollno){
        this.name = name;
        this.rollno = rollno;
    }
    display(){
        console.log("Student name : "+this.name+" and Roll no : "+this.rollno);
    }

}
let s=new student("Praveen",1222);
s.display();