// server.js (Node/Express)
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
const app = express();
app.use(cors(), express.json());

const HF_API_TOKEN = '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';
app.post('/api/chat', async (req, res) => {
  try {
    const hfRes = await fetch('https://api-inference.huggingface.co/models/gpt2', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HF_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const body = await hfRes.text();
    res.status(hfRes.status).send(body);
  } catch (e) {
    res.status(500).json({ error: 'internal_server_error' });
  }
});

app.listen(3000, () => console.log('Proxy listening on http://localhost:3000'));
