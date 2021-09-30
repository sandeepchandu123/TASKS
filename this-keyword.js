// for loop
var cars = [ "fait", "benz", "honda", "toyota"];
for(i=0;i<cars.length;i++){
    console.log(cars[i]);

}

// for in for object

var salaries={
    jack : 24000,
    paul : 34000,
    monuca : 55000
};
for (let i in salaries){
    let salary="$" + salaries[i];
    console.log(salary);
}

// for in for array
var arr = ['hello' , 1 , 'java'];
for (let i in arr){
    console.log(arr[i]);

}

// for of over an array

var num=[10, 20, 30];
for (let value of num){
    value +=2;
    console.log(value);
}


// for of over string


var num = "booo";
for (let value of num){
    console.log(value);
}


// for each
var companies = ["apple", "google", "facebook"];
companies.forEach(company=>{
    console.log(company);
})