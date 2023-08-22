import course from "../models/course.js";
class NewsController {
    //GET /news
    server(req, res, next) {
        course.find()
            .then((courses) => {
                res.render('news', {
                    // title: 'TEST TITLE',
                    courses: courses,
                })
                // res.json(courses);
            })
            .catch(next);
    };

    //GET news/:slug
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    };
}

export default new NewsController();