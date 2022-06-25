const mongoose = require('mongoose')
const {Schema, model} = mongoose

const upperAssembliesSchema = new Schema({
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
    }
 
})

mongoose.models = {}

export default mongoose.models.uppers || model('Upper', upperAssembliesSchema)