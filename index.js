import express from 'express';
import dotenv from 'dotenv';
import { supabase } from './Config/supabase.config.js';

dotenv.config();

const port = process.env.PORT;
const api_key = process.env.APIKEY;

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send('Hej verden!');
});

app.get('/about', (req, res) => {
  res.send('Dette er about siden...');
});

app.get('/contact', (req, res) => {
  res.send('Dette er kontakt siden...');
});

app.get('/test', async (req, res) => {
    // Routing Scope
  });

  let { data, error } = await supabase.from('songs').select('id, title')
if (error) {
  throw new Error(error.message);
} else {
  return data;
}

app.listen(port, () => {
  console.log(`Express server kører på http://localhost:${port}`);
});

