// import integration
const client = require('../config/slackWebhook');

// import models
// const { channelModel } = require('../models/channelModels')

// test connection app webhook
const testWebhook = async (req, res) => {
    try {
        console.log(req.body)
        res.json({status: req.body})
    }
    catch (error) {
        console.error(error);
    }
    
}


    


module.exports = { testWebhook };

