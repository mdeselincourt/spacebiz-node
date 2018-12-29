// As per Pawel's tutorial

// This just wraps axios with some configuration added

// Is this the right place?!?

import axios from 'axios'

const API_URL = process.env.API_URL || 'https://m1c6e25h0l.execute-api.us-east-1.amazonaws.com/dev/worldstate'

var bearerToken = "I haven't got one"

export default axios.create({
  baseUrl: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + bearerToken // Pawel uses localStorage and this is BAD
  }
})
