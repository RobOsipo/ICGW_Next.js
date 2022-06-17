const mongoose = require('mongoose')
const {Schema, model} = mongoose

const handguardsSchema = new Schema({
    title: {
        type: string,
        required: true
    },
    imageUrl: {
        type: string,
        required: true,
    },
    mainDescription: {
        type: string,
        required: true
    },
    secondaryDescription: {
        type: string,
        required: false
    },
    weights: {
        type: string,
        required: false
    }
})

mongoose.models = {}

export default mongoose.models.Handguards || model('Handguard', handguardsSchema)