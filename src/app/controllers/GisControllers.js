import Course from "../models/Course.js";
class GisController {
    //GET /gis
    app(req, res, next) {
        Course.find()
            .then((courses) => {
                res.render('gis', {
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