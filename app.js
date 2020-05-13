const express = require('express');
const fs = require('fs');
const option_chain = require('./nse_lib');
const cors =  require('cors');
const app = express();
app.use(cors())
const port = process.env.PORT || 3000;
app.use(express.static('public'))

app.get('/', (req, res) => res.redirect('/index.html'));
app.get('/chain', async (req, res) => {
    try{
        let resp = await option_chain();
        res.send(resp);
    }catch(err){
        res.status(500).send(err);
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))