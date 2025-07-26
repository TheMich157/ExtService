require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');
const routes = require('./routes');
const { apiKeyCheck } = require('./middleware/apiKey');
const logger = require('./utils/logger');

const app = express();
connectDB();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(logger);

app.use(rateLimit({ windowMs: 60 * 1000, max: 60 }));

app.use('/api', apiKeyCheck, routes);
app.get('/', (req, res) => {
  res.send('Roblox Backend Service is running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server listening on', PORT));
