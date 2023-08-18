// import integration
const client = require('../config/slack');

  
// retrieve conversation in channel incident report
class ConversationController {
    static async getIncidentConversationHistory(req, res) {
        // Store conversation history
        let conversationHistory;
        // ID of channel you watch to fetch the history for
        let channelId = "CGVF0LGCU";  // indicent report

        try {
        // Call the conversations.history method using WebClient
        const result = await client.conversations.history({
            channel: channelId
        });

        conversationHistory = result.messages;
        res.json({data: result.messages})

        // Print results
        console.log(conversationHistory.length + " messages found in " + channelId);
        }
        catch (error) {
        console.error(error);
        }
    }
};

module.exports = { ConversationController };

