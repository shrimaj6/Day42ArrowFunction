class EmployeePayRollData{
    id;
    salary;
    gender;
    startDate;

    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }

    get name() {return this._name};
    set name(name) {this._name=name
    let nameRegex=RegExp('^[A-Z]{1}[a-z]{3}$');
    if(nameRegex.test(name))
    this._name=name;
    else throw 'Name is Incorrect';
    };


    toString(){
        return "id :"+this.id+", name : "+this.name+", salary :"+this.salary+",gender :"+this.gender+", startDate : "+this.startDate;

    }
}

let employeePayRollData=new EmployeePayRollData(1,"Mark",3000,"M",new Date);
console.log(employeePayRollData.toString());
try{
    employeePayRollData.name="John";
    console.log(employeePayRollData.toString());
}catch(e){
    console.error(e);
}




// class EmployeePayrollData{
//     id;
//     salary;
//     gender;
//     startDate;

//     constructor(...params){
//         this.id = params[0];
//         this.name = params[1];
//         this.salary = params[2];
//         this.gender = params[3]
//         this.startDate = params[4];
//     }

//     get name() { return this._name; }
    
//     set name(name) { 
//         let namePattern = new RegExp('^[A-Z]{1}[a-z]{1}$');
//         if (namePattern.test(name))
//         this._name = name;
//         else
//         throw new "Please enter valid name"; 
//     }

//     toString() {
//         return "id : " + this.id + " Name : " + this.name + " Salary : " + this.salary + " Gender : " + this.gender + " Start Date : " + this.startDate;
//     }
// }

// let employeePayrollData = new EmployeePayrollData(1, "Mr", 40000, "M", new Date());
// console.log(employeePayrollData.toString());