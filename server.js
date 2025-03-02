const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

const UrlSchema = new mongoose.Schema({
    originalUrl: String,
    shortUrl: String
});

const Url = mongoose.model('Url', UrlSchema);

app.post('/shorten', async (req, res) => {
    const { originalUrl } = req.body;
    if (!originalUrl) return res.status(400).json({ error: 'URL is required' });
    
    const shortUrl = shortid.generate();
    const newUrl = new Url({ originalUrl, shortUrl });
    await newUrl.save();
    res.json({ originalUrl, shortUrl: `${req.protocol}://${req.get('host')}/${shortUrl}` });
});

app.get('/:shortUrl', async (req, res) => {
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });
    if (!url) return res.status(404).json({ error: 'URL not found' });
    res.redirect(url.originalUrl);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
