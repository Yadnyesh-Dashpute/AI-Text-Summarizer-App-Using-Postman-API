const axios = require('axios');

async function summarizeText(text) {
  
  let data = JSON.stringify({
    "inputs": text,
    "parameters": {
      "max_length": 100,
      "min_length": 30
    }
  });

  let config = {
    method: 'post',
    url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
    headers: { 
      'Authorization': 'Bearer ' + process.env['ACCESS_TOKEN'],
      'Content-Type': 'application/json'
    },
    data : data
  };

   try {
      const response = await axios.request(config);
      // Return the summary text from the response
      return response.data[0].summary_text;
    } catch (err) {
      console.log(err);
    }
  }


// Allows for summarizeText() to be called outside of this file

module.exports = summarizeText;