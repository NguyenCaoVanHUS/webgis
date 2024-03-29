import newsRouter from './news.route.js';
import gisRouter from './gis.route.js';
import siteRouter from './site.route.js';
import coursesRouter from './courses.route.js';


function route(app) {
    app.use('/news', newsRouter);

    app.use('/gis', gisRouter);

    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
};

export default route;

