
import  express from 'express';

import axios from 'axios';

import cors from 'cors';

const app = express();

const PORT = process.env.PORT||7878;

app.use(cors());

app.use(express.json());

let url = "https://catfact.ninja/fact";

let timeRange = 5000;

app.get('/me', async (req,res) =>{
    try {
    // The random cat fact from cat facts ApI is passed using axios 
    let response = await axios.get(url,{timeout:timeRange})

    // response structure as per task requirements
    let userData = {
        status: "success",
        user: {
            email:"ndubuisid807@gmail.com",
            name: "Daniel Ndubuisi",
            stack:"Node.js/Express"
        },
        timestamp: new Date().toISOString(),
        fact: response.data.fact
    };
    res.json(userData);
    } catch (error) {
        console.log(`Cat Fact API Error: ${error}`);

        // Gracefull fallback if the cat facts API fails

        let setResponseFallback = {
            status: "success",
            user: {
                email: "ndubuisid807@gmail.com",
                name: "Daniel Ndubuisi",
                stack: "Node.js/Express"
            },
            timestamp: new Date().toISOString(),
            fact: "A cat is an amazing pet"
        };

        res.json(setResponseFallback);

    }
});

app.listen(PORT,()=>{
    console.log(`Server runs on ${PORT}`);
});