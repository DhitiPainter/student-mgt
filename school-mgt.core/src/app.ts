import { json, urlencoded } from 'body-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import uuid from 'uuid';
import publicRoutes from './routes/public/index';
// tslint:disable-next-line: no-var-requires
const httpContext = require('express-http-context');
import RateLimit = require('express-rate-limit');
import { errorHandler } from './auth/error-handler';
import { jwt } from './auth/jwt';

// Create Express server
const app = express();

app.use(httpContext.middleware);
// Run the context for each request. Assign a unique identifier to each request
// tslint:disable-next-line: only-arrow-functions
app.use(function (req, res, next) {
    httpContext.set('reqId', uuid.v1());
    next();
});

app.use(json());
app.use(urlencoded({ extended: true }));

// app.use(
//     '/api',
//     //   validateToken, // valid token through passport bearer stretegy
//     //   privateRoutes // routes
// ); // allow access to private APIs

app.use('/auth',
    new RateLimit({
        max: 100,
        windowMs: 1 * 60 * 1000, // 15 minutes        
    }),
    publicRoutes
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());
app.use(jwt());

// error handler, send stacktrace only during development
app.use(errorHandler);

// Express configuration
app.set('port', process.env.PORT || 3000);

// OLD way for routes (working)
// app.use('/auth',
//     require('./controllers/user.controller'));
// app.use('/users',
//     require('./controllers/user.controller'));

export default app;
