/**************************************
 * expose all api routes from public
 ***************************************/

import Express from 'express';

// create router instance
const router = Express.Router();

import auth from './auth.route';
auth(router);

export default router;
