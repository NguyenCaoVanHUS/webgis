class NewsController {
    //GET /news
    server(req, res) {
        res.render('news');
    }

    //GET news/:slug
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    };
}

export default new NewsController();