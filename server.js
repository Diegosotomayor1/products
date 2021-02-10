const express = require('express');
const app = express();


app.get('/',(req,res) => {
    res.send('Hola mundo en node js');
});
app.listen(process.env.PORT || 4000,()=> {
    console.log('4000');
});