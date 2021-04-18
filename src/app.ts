import express, {Application, Request, Response, NextFunction} from 'express';

const app: Application = express();

const greet = (who: string, action: string): string => {
    return who + action;
};

app.get('/', (req: Request, res:Response, next: NextFunction) => {
    res.send(greet("Good ","morning"));
});

app.listen(5000, () => {
    console.log('server running');
})