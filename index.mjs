import express from 'express';
import mongodb from 'mongodb';

import settings from './settings';
const { port, host, mongodbserver } = settings;
const app = express();
app.use(express.json());

app.post('/logs', async (req, res) => {
    const log = req.body;

    const client = await mongodb.connect(mongodbserver);
    const db = client.db('test');
    const collection = db.collection('logs');
    await collection.insertOne(log);

    return res.status(201).json(log);
});

app.listen(port, host, () => {
    console.log(`Log API started at ${host}:${port}`);
});
