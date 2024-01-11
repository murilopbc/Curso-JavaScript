function eDivisivel(num) {

    if (isNaN(num)){
        console.log("Número Inválido");
    }
    else{
        if (num % 3 == 0 && num % 5 == 0) {
            console.log("FizzBuzz");
           
        } 
        else if (num % 3 == 0) {
            console.log("Fizz");
            
        }
        else if (num % 5 == 0) {
            console.log("Buzz");
           
        } else {
            console.log(num);
        }
        return; 
        
    }
}

const rand = Math.floor(Math.random() * 100);
console.log(rand);

eDivisivel(rand);