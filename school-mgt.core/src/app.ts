import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import uuid from 'uuid';
import publicRoutes from './routes/public/index';
import privateRoutes from "./routes/private";
import httpContext from 'express-http-context';
import RateLimit = require('express-rate-limit');
import { errorHandler } from './auth/error-handler';
import { jwt } from './auth/jwt';
import { validateToken } from './auth/passport';

const whitelist = 'http://localhost:3000/'; // process.env.SITE_URL ? process.env.SITE_URL.split(',') : 
export const corsOptionsDelegate = (req: any, callback: any) => {
    let corsOptions;
    if (
        whitelist.indexOf(req.header('Origin')) !== -1 ||
        (!req.header('Origin') && process.env.NODE_ENV !== 'production')
    ) {
        corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
};

// Create Express server
const app = express();

// enable CORS - Cross Origin Resource Sharing
app.use(cors(corsOptionsDelegate));

app.use(httpContext.middleware);
// Run the context for each request. Assign a unique identifier to each request
app.use(function (req, res, next) {
    httpContext.set('reqId', uuid.v1());
    // Works but its not the good approach when already using CORS
    //res.header('Access-Control-Allow-Origin', '*');
    //res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
app.use(
    '/api',
    new RateLimit({
        max: 100,
        windowMs: 1 * 60 * 1000, // 15 minutes        
    }),
    // validateToken, // valid token through passport bearer stretegy
    privateRoutes // routes
); // allow access to private APIs

app.use('/auth',
    new RateLimit({
        max: 100,
        windowMs: 1 * 60 * 1000, // 15 minutes        
    }),
    publicRoutes
);

app.use(jwt());

// error handler, send stacktrace only during development
app.use(errorHandler);

// Express configuration
app.set('port', process.env.PORT || 4000);

// OLD way for routes (working)
// app.use('/auth',
//     require('./controllers/user.controller'));
// app.use('/users',
//     require('./controllers/user.controller'));

export default app;
