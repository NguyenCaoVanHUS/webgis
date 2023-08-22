import course from "../models/course.js";
class GisController {
    //GET /gis
    server(req, res, next) {
        course.find()
            .then((courses) => {
                res.render('gis', {
                    // title: 'TEST TITLE',
                    courses: courses,
                })
                // res.json(courses);
            })
            .catch(next);
    };

    //GET gis/:slug
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    };
}

export default new GisController();