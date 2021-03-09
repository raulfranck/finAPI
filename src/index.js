const express = require('express');
const { v4: uuidv4 } = require("uuid");
const app = express();

app.use(express.json());

const costumers = [];

app.post("/account", (request, response) => {
    const {cpf, name} = request.body;

    const customerAlradyExists = costumers.some((customer) => customer.cpf === cpf)

    if (customerAlradyExists) {
        return response.status(400).json({error: "Customer already exists!"})
    }

    costumers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: [],
    });

    return response.status(201).send();

});

app.listen(3333);
