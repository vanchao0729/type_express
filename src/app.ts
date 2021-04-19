import express, {Application, Request, Response, NextFunction} from 'express';

const app: Application = module.exports = express();

const greet = (who: string, action: string): string => {
    return who + action;
};

app.use('/api/news', require('./controller/api_news'));

app.get('/', (req: Request, res:Response, next: NextFunction) => {
    res.send(greet("Good ","morning") + ". This is a express based project");
});

app.listen(5000, () => {
    console.log('server running');
})
