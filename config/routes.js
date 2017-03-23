const express = require('express'),
    Router = express.Router(),
    Index = require('../controllers/IndexController');
/*
 * --- HTML Routes ---
 */
Router.get('/', Index.loadIndex);

/*
 * --- API Routes ---
 */

Router.get('/api/', (req,res) => {

	res.json({testing:"API"});

})


module.exports = Router;