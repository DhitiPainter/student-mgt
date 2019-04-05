// tslint:disable-next-line: no-var-requires
require('rootpath')();
// tslint:disable-next-line: ordered-imports
import { json, urlencoded } from 'body-parser';
import bodyParser from 'body-parser';
// tslint:disable-next-line: ordered-imports
// import compression from 'compression'; // compresses requests
import cors from 'cors';
import express from 'express';
// import methodOverride from 'method-override';
import uuid from 'uuid';
// import publicRoutes from './routes/public/auth.route';
// tslint:disable-next-line: no-var-requires
const httpContext = require('express-http-context');
import RateLimit = require('express-rate-limit');
import { jwt } from './auth/jwt';
import { errorHandler } from './auth/error-handler';

// Create Express server
const app = express();

// app.use(httpContext.middleware);
// Run the context for each request. Assign a unique identifier to each request
// tslint:disable-next-line: only-arrow-functions
// app.use(function (req, res, next) {
//     httpContext.set('reqId', uuid.v1());
//     next();
// });


// app.use(compression());

// app.use(json());
// app.use(urlencoded({ extended: true }));


// app.use(
//     '/api',
//     //   validateToken, // valid token through passport bearer stretegy
//     //   privateRoutes // routes
// ); // allow access to private APIs

// app.use('/auth',
//     new RateLimit({
//         windowMs: 1 * 60 * 1000, // 15 minutes
//         max: 100,
//     }),
//     publicRoutes
// );


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());
app.use(jwt());
// tslint:disable-next-line: no-var-requires

app.use('/users',
    require('./controllers/user.controller'));

// error handler, send stacktrace only during development
app.use(errorHandler);

// Express configuration
app.set('port', process.env.PORT || 3000);

export default app;
