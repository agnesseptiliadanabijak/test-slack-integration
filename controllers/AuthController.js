// import integration
const client = require('../config/slack');

// Lists all channels in a Slack team
const testAuthConnection = async(req, res) => {
    const result = await client.auth.test()
    return res.json({result})
};

module.exports = { testAuthConnection };

