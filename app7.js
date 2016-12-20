var employee1 ={
    
    name : "Mrutyunjay Nayak",
    age : 23,
    salary : 10000,
    address :{
        
        city : "Banglore",
        state : "Karnataka",
        pincode : 560076
    }
}
var employee2 ={
    
    name : "Sagar Parida",
    age : 24,
    salary : 20000,
    address :{
        
        city : "Banglore",
        state : "Karnataka",
        pincode : 560076
    }
}
var employee3 ={
    
    name : "Deepak dash",
    age : 25,
    salary : 30000,
    address :{
        
        city : "Banglore",
        state : "Karnataka",
        pincode : 560076
    }
}
var employee4 ={
    
    name : "Nalini Pattanaikr",
    age : 26,
    salary : 40000,
    address :{
        
        city : "Banglore",
        state : "Karnataka",
        pincode : 560076
    }
}
var employee5 ={
    
    name : "Saiman Sahoo",
    age : 27,
    salary : 50000,
    address :{
        
        city : "Banglore",
        state : "Karnataka",
        pincode : 560076
    }
}
 
  var employeeArray = [];
employeeArray.push(employee1);
employeeArray.push(employee2);
employeeArray.push(employee3);
employeeArray.push(employee4);
employeeArray.push(employee5);
for(var i =0;i<employeeArray.length;i++){
    
    console.log("employee"+[i+1]);
        console.log( "Name :"+employeeArray[i].name);
        console.log("Age :"+employeeArray[i].age);
        console.log("salary :"+employeeArray[i].salary);
        console.log("City :"+employeeArray[i].address.city);
        console.log("State :"+employeeArray[i].address.state);
        console.log("Pincode :"+employeeArray[i].address.pincode);
}





