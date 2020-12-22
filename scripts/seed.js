import faker from "faker"
const db = require ("./models")
// import { User } from "./models/User"
// import { Product } from "./models/Product"


export const seedUsers = async () => {
    try {
        console.log("working")
        const products =[];
        const users=[];
        const quantity = 5;
        for (let i = 0; i < quantity; i++){
            users.push({
                    productName: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    image: faker.image.technics(),
                })
            
        }

        for (let i = 0; i < quantity; i++){
            users.push( 
                    {
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    password: faker.internet.password(),
                    location: {
                        street: faker.address.streetAddress(),
                        city: faker.address.city(),
                        state: faker.address.state(),
                        postcode: faker.address.zipCode(),
                    }
                    })
            
        }
        console.log(users)
        console.log(products)

    } catch (error) {
        console.log(error)
    }
}

seedUsers();