// import integration
const client = require('../config/slack');

// import models
const { channelModel } = require('../models/ChannelModels')

// Lists all channels in a Slack team
const getAllChannel = async(req, res) => {
    try {
        // Call the conversations.list method using the WebClient
        const result = await client.conversations.list()
    
        // review the result 
        // let emptyArray = []
        // result.channels.map(async(data) => {
        //     let epochCreated = data.created
        //     let dateCreated = new Date(epochCreated * 1000);
        //     let isoCreated = dateCreated.toISOString()
        //     // emptyArray.push({id: data.id, name: data.name, created: isoCreated, updated: data.updated})
        //     emptyArray.push(data)
        // })
        // res.json({emptyArray})

        // send data to db
        let count = 0
        result.channels.map(async (data) => {
            // let dateCreated = new Date(data.created * 1000);
            // let dateUpdated = new Date(data.updated * 1000);

            await channelModel.insertData(data.id, data.name)
                // add data.topic.value, data.creator
                // add data.is_private = false
                // add data.is_archived, data.previous_names, data.purpose.value
        })

        await res.json({status: "success"})
    }
    catch (error) {
        console.error(error);
        await res.json({status: "failed"})
    }

};

module.exports = { getAllChannel };

