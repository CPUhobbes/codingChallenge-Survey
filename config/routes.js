const express = require('express'),
    Router = express.Router(),
    Controllers = require('../controllers');
/*
 * --- HTML Routes ---
 */
Router.get('/', Controllers.index.loadIndex);

/*
 * --- API Routes ---
 */

Router.get('/api/questions', Controllers.questions.list);

Router.post('/api/questions', Controllers.questions.create);
Router.post('/api/questions/:questionId/answer', Controllers.answers.create);
Router.post('/api/questions/:questionId/ipAddress', Controllers.ipAddress.create);

module.exports = Router;