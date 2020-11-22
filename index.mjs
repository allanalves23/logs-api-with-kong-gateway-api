import express from 'express';
import mongodb from 'mongodb';

const port = 3005;
const host = '0.0.0.0';
const app = express();


app.use(express.json());

app.post('/logs', async (req, res) => {
    const log = req.body;

    const client = await mongodb.connect('mongodb://root:123456@172.26.0.1:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false');
    const db = client.db('test');
    const collection = db.collection('logs');
    await collection.insertOne(log);

    return res.status(201).json(log);
});

app.listen(port, host, () => {
    console.log(`Log API started at ${host}:${port}`);
});
