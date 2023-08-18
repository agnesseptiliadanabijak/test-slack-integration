var express = require('express');
var router = express.Router();

// import controllers 
const { testAuthConnection } = require('../controllers/AuthController')
const { getAllChannel } = require('../controllers/GetChannelController')
const { testWebhook } = require('../controllers/AuthWebhookController')


/* GET home page. */
router.get('/', function(req, res) {
  res.send("SLACK INTEGRATION API")
});

router.post('/api/test-connection', testAuthConnection)
router.get('/api/channel-list', getAllChannel)
router.post('/api/test/slack/event', testWebhook)


module.exports = router;
