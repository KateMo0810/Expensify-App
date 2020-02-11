const person = {
    name: 'Laura',
    age: 26,
    location:{
        city:'Philadelphia',
        temp:92
    }
}

const {name: firstname= 'Anonymous',age} = person;

console.log(`${firstname} is ${age}`);

const {city,temp:temperature} = person.location;
if(city && temperature){
console.log(`Ìt's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name:publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

//Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [,city1,state='New York'] = address;
console.log(`You are in ${city1} ${state}`);

const item = ['coffee (hot)','$2.00','$2.50','$2.75'];
const [coffee,,price] = item;
console.log(`A medium ${coffee} costs ${price}`);