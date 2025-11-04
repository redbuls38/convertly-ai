require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const checkoutRoute = require('./routes/create-checkout');
app.use('/api', checkoutRoute);

app.get('/', (req,res)=>res.send('Convertly.ai backend running'));

app.listen(port, ()=>console.log(`Backend running on port ${port}`));
