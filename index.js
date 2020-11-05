const express = require('express');
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'./views')))

app.listen(process.env.PORT || 4000, () => {
    console.log('Servidor online...');
});