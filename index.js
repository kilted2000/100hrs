import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("publics"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/soon.html")
})