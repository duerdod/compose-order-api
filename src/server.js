const express = require('express');
const app = express();
const port = process.env.PORT || 7000;

const dbRoute = app.get('/', (request, response) => response.send('yello'));

app.listen(port, () => console.log(`Server is listening on ${port}`));
