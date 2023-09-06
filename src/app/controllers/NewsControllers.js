class NewsController {
    //GET /news
    app(req, res, next) {
        res.render('news');
    };

    //GET news/:slug
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    };
}

export default new NewsController();