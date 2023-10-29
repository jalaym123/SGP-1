const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const { PORT, mongoURL } = require('./config.json')
const connectDb = require('./config/dbConnect');
const cors = require('cors')

connectDb(mongoURL);

const app = express();

const port = PORT || 5000;

app.use(express.json());
app.use(cors()) // Use this after the variable declaration and before routes declaration
app.use('/api/users', require('./routes/usersRoutes'))
app.use('/api/tables', require('./routes/tableRoutes'))
app.use('/api/restro', require('./routes/restroRoutes'))
app.use('/api/payment', require('./routes/payment'))
app.use(errorHandler);

app.listen(port, () => {
    console.log("server running on port: " + port)
});
