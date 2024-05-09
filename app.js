const express = require('express');
var cors = require('cors')
const app = express();
const categoryRouter = require('./routers/categoryRouter');
const productRouter = require('./routers/productRouter');
const authRouter = require('./routers/authRouter');


const timeAndUrlMiddleware = require('./middlewares/timeAndUrlMiddleware');
const checkDataMiddleware = require('./middlewares/checkDataMiddleware');



app.use(express.json());
const bodyParser = require('body-parser')
app.use(cors())




app.use(timeAndUrlMiddleware);
app.use(checkDataMiddleware);
    


app.use('/users', authRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);


app.listen(3000, () => {
    console.log(`Server Started at 3000`)
})