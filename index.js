
const express =require( 'express');
const bodyParser =require( 'body-parser');
const mongoose =require( 'mongoose');
const cors =require( 'cors');
const compression =require( 'compression')
const postRoutes =require( './routes/posts')
const path =require('path')
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//const __dirname = path.resolve(path.dirname(''));
if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.use('/api/posts', postRoutes);
const CONNECTION_URL= 'mongodb://localhost:27017/cruadapp'
//const CONNECTION_URL =process.env.mongodburi
// 'mongodb+srv://js_mastery:123123123@practice.jto9p.mongodb.net/test';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);