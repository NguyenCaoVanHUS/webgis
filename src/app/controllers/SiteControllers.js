import Course from "../models/Course.js";
import { mutipleMongooseToObject } from '../../util/mongoose.js';
class SiteController {
    //GET /
    app(req, res, next) {
        Course.find()
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                    //courses: courses.map(course => course.toObject())
                });
            })
            .catch(next);
    };

    //GET /search
    search(req, res) {
        res.render('search');
    };
}

export default new SiteController();