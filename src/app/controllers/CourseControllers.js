import Course from "../models/Course.js";
import { mutipleMongooseToObject } from '../../util/mongoose.js';
class CourseController {
    //GET /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.json(course);
            })
            .catch(next);
        //res.send('Course detail!!!' + req.params.name);
    };
}

export default new CourseController();