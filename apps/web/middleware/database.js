import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';



const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function database(req, res, next) {
    // if (!client.isConnected()) 
    try {
        await client.connect();
        req.dbClient = client;
        req.db = client.db('booking');
        return next();
    } catch (error) {
        console.log("error getting database ", error)
    }

}

const middleware = nextConnect();

middleware.use(database);

export default middleware;