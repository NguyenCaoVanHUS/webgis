import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import route from './routes/index.js';
import db from './config/db/mongodb.js';
import path from 'path';

db.connect();

const app = express();
const port = 3000;

app.use(express.static('src/public'));
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', 'src/resources/views');

// Router init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

