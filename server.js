import express from 'express';
const app=express();

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"a jokes",
            content:"Why was the chicken cross the "
        },
        {
            id:2,
            title:"2nd jokes",
            content: "Why was the chicken"
        },
        {
            id:3,
            title:"3rd jokes",
            content: "Why was the chicken"
        },
        {
            id:4,
            title:"4th jokes",
            content: "Why was the chicken"
        },
        {
            id:5,
            title:"5th jokes",
            content: "Why was the chicken"
        },
    ]
    res.send(jokes);
})

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000/");
})