import mongoose from "mongoose"

export async function main() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin1234@cluster0.lc5yumr.mongodb.net/messages?retryWrites=true&w=majority&appName=Cluster0')
        console.log('CONNNNECTED')
    } catch (error) {
        console.log('ERROR: ',error)
    }
}

const messageSchema = new mongoose.Schema({
    name: String  
})

const Message = mongoose.model('Message', messageSchema)
