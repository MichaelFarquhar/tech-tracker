const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', cors(), (req, res) => {
    return 'Hello';
});

const PORT = 5000 | process.env.PORT;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});
