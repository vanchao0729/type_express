import express, {Request, Response, NextFunction, Router} from 'express';

var api_news: Router = express.Router();

api_news.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('News api here');
});

api_news.get('/info/:id', (req: Request, res: Response, next: NextFunction) => {
    let id = req.params.id;
    // res.send('News info api here');
    res.send('News info id is ' + id);
});

module.exports = api_news;
