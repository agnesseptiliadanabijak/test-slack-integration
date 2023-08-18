const {sequelize} = require('../config')
const {DataTypes} = require('sequelize')


class ChannelModel {
    #model = sequelize.define('channels', {
        id: {
            primaryKey: true,
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        modelName: 'channels',
        tableName: 'channels',
        createdAt: false,
        updatedAt: false,
        // updatedAt: true,
        underscored: true

    })

    // get the model
    async getModel(){
        return this.#model
    }
    
    // insert channel data
    async insertData(id, name, createdAt, updatedAt) {
        console.log(id, name, createdAt, updatedAt)
        try {
            const data = await this.#model.create({id, name, createdAt, updatedAt})
            return data
        } catch(error) {
            console.log(error)
            return error
        }
    }

}

const channelModel = new ChannelModel()
module.exports = { channelModel }