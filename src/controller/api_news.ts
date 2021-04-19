import express, {Application, Request, Response, NextFunction, Router} from 'express';

var api_news: Router = express.Router();

api_news.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('News api here');
});

api_news.get('/info', (req: Request, res: Response, next: NextFunction) => {
    res.send('News info api here');
});

module.exports = api_news;
