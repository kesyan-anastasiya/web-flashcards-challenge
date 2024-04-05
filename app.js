require('@babel/register');
const express = require('express')
const morgan = require('morgan')

const app = express();
const path = require('path');

const indexRouter = require('./routes/index.routes')
const ssr = require('./middleware/ssr');

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: 'true' }));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(ssr)

app.use('/', indexRouter)

const PORT = 4000

app.listen(PORT, () => {
    console.log(`Медведи в шкуре барса любят Аню на ${PORT} порту`);
})