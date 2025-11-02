import express from 'express'//module js
const app = express()
const port = process.env.PORT || 3000
// app.get('/',(req,res)=>{
//     res.send('server is ready')
// })
app.get('/api/jokes',(req,res)=>{
        const jokes = [
    {
        "id": 1,
        "type": "general",
        "setup": "What do you call a fake noodle?",
        "punchline": "An Impasta!"
    },
    {
        "id": 2,
        "type": "programming",
        "setup": "Why do programmers prefer dark mode?",
        "punchline": "Because the light attracts bugs."
    }];
    res.send(jokes);

})
app.listen(port,()=>{
    console.log(`serve at https://localhost:${port}`);
    }
)