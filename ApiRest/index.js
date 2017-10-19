import express from 'express';
import consign from 'consign';

/*=============================================
=            Initialize the Application       =
=============================================*/
const app = express();


consign()
    .include('libs/middlewares.js')
    .then('routes')
    .include('libs/bootstrap.js')
    .into(app);
