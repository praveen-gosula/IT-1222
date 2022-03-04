function arrfun(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
    this.display=function() {
        setTimeout(() => {
            console.log("id:",this.id, "  Name:",this.name, "  Salary:",this.salary);
        },1000);
    };
    this.display();
}
arrfun(1,"Ravi",100000);