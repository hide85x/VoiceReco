const express= require('express')
const path= require('path')
var cons = require('consolidate');
 const app= express()
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'))
app.set('view engine', 'html');
app.get('/', (req, res, next)=> {
    res.render('index.html')
})



app.listen(3000)