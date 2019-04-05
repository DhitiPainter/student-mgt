// load env
// import dotenv from 'dotenv';
// import path from 'path';
// import fs from 'fs';
// import * as db from './db/connect';

// Load db env
// db.connectDatabase();

// Create Server
import app from './app';
// import http from 'http';

export const jwtExpiration = +(process.env.JWT_EXPIRATION || 900000);

console.log('jwt : ', jwtExpiration);


const server = app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});
// http.createServer(app).listen(app.get('port'));
// https.createServer(options, app).listen(443);

console.info(
    `app is running on http with port : ${app.get(
        'port'
    )}`
);