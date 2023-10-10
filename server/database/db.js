import mongoose from "mongoose";

async function dB(username="pavan",password="pavan1234") {
    const URL = `mongodb+srv://${username}:${password}@collobarative-text-app.2patxae.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Connection succesful');
    } catch (error) {
        console.log('Error while connecting the database', error);
    }
}

export default dB;