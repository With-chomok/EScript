class dog {
     constructor (name, age, eat){
        this.name = name;
        this.age = age;
        this.eat = eat
     }

     eat (){
         console.log(`thsi jhon eating a ${this.eat}`);
         
     }

}

class birds {
    constructor (name, age, eat){
        this.name =name;
        this.age = age;
        this.eat = eat
    }
}

function min(nums) {
    return Math.min(nums)
}
// console.log(min([1,3,4,5,]));

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const {price} = product;
