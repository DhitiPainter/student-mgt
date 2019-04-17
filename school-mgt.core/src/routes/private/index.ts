/**************************************
 * expose all api routes from private
 ***************************************/

import Express from 'express';

// create router instance
const router = Express.Router();

import user from './user.route';
user(router);

export default router;