const express = require('express');
const cors = require('cors');

const connectToMongo = require('./db');

const load = async() => {

    await connectToMongo();

    const app = express();

    const PORT = process.env.PORT || 8181;
    
    app.use(express.json());
    app.use(cors());
    
    // Available Routes
    app.use('/api/auth', require('./routes/auth'));
    app.use('/api/notes', require('./routes/notes'));

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
}
load();