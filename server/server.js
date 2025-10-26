const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Fonction pour lire un fichier de manière asynchrone
async function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.trim());
            }
        });
    });
}

app.post('/api/prompt', async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // Chemin vers les fichiers de configuration
        const apiKeyPath = path.join(__dirname, 'cle-mistral-ai.txt');
        const modelPath = path.join(__dirname, 'model-mistral-ai.txt');

        // Lecture des fichiers
        const [apiKey, model] = await Promise.all([
            readFileAsync(apiKeyPath),
            readFileAsync(modelPath)
        ]);

        const response = await axios.post('https://api.mistral.ai/v1/chat/completions', {
            model: model,
            messages: [{ role: 'user', content: prompt }],
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(500).json({
            error: 'An error occurred while calling the Mistral API',
            details: error.response ? error.response.data : error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
