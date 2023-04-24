// const path = require('path')
const express = require('express');
const morgan = require('morgan');
// const handlebars = require('express-handlebars');
const app = express();
const port = 3001;

app.use(morgan('combined'));

// app.engine('handlebars', handlebars());
// app.set('view engine', 'handlebars');
// app.set('view', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.send('home')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});