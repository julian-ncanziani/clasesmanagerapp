import { urlencoded, json } from 'body-parser';
import express from 'express';
import router from './routes/index';
import connection from './db/config';


const app = express();
//asd
app.use(json());
app.use(urlencoded({extended: true}));
app.use(router);
connection.sync({force: true}).then(()=>{
        app.listen(3001);
        console.log('Server running on port 3001');
    }).catch((err)=>{
        console.log('connection sync error: ' + err.message);
    });
