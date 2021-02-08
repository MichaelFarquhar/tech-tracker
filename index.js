const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
    res.json('hio');
});

const PORT = 5000 | process.env.PORT;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});
