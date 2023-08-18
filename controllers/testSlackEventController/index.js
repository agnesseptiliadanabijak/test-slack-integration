// import integration
const client = require('../../config/slack');

// import models
// const { channelModel } = require('../models/channelModels')


class TestEventController {
    static async testChallenge(req, res) {
        try {
            console.log(req.body)
            res.json({statuS: req.body})
        }
        catch (error) {
            console.error(error);
        }
        
    }
}


    


module.exports = { TestEventController };

