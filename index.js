const express = require('express');
const route = require('./src/routes/sample');
const app = express();

app.use(express.json());
app.use('/api', route);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});