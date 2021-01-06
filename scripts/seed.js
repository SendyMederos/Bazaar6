import faker from "faker";
const mongoose = require("mongoose");
const db = require ("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/bazaar6"
  );

export const runSeed = async () => {
    try {
        console.log("working")
        const products =[];
        const users=[];
        const quantity = 20;
        for (let i = 0; i < 100; i++){
            products.push({
                    productName: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    image: faker.image.nature(),
                    category: faker.commerce.department(),
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
        
        db.User
        .remove({})
        .then(() => db.User.collection.insertMany(users))
        .then(data => {
            console.log(data.result.n + " users inserted!");
            process.exit(0);
        })
        .catch(err => {
                console.error(err);
                process.exit(1);
              });

        db.Product
              .remove({})
              .then(() => db.Product.collection.insertMany(products))
              .then(data => {
                  console.log(data.result.n + " products inserted!");
                  process.exit(0);
              })
              .catch(err => {
                      console.error(err);
                      process.exit(1);
                    });

    }catch (error) {
        console.log(error)
    }
}


runSeed();