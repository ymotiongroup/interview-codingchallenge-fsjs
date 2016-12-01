/**************************************************

Hi There Arturo
as you can see the back is not complete , this core is more regarding with
make the request to the Database and Handle the Data.
I used for testing this REST REST Easy for Google Chrome.

Mongodb
DBS : hobbies !made it for test porpuse
Collection : hobbies !made it for test porpuse

Rest API:
Content-Type : application/json
* http://localhost:3000/api/hobbies -> Method GET -> Getting the Info
* http://localhost:3000/api/hobbies -> Method Post -> Create a Record
      {
      "hobbie":"Test Hobby Update",
      "hobbie_type": "Test Hobbie Type Update"
      }
* http://localhost:3000/api/_id_from_database -> Method Put -> Update a Record
      {
      "hobbie":"Test Hobby Update",
      "hobbie_type": "Test Hobbie Type Update"
      }
* http://localhost:3000/api/_id_from_database -> Method Delete -> Delete a Record

Left to Do :

* All the front end
* Add the Middleware and the Cookie , i thought would be better add once have the front
in progress.
* For Testing porpuse i like it to use Grunt and Mocha , also thought would better
used it once the front is in progress

Any Comment, Suggest or Concern

Let me know by Skype or with a commit

Thanks
Sincerily
Ivan

*****************************************************/
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));
app.use(favicon(path.join(__dirname, 'client', 'imgs/favicon.ico')));
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(3000);
console.log('Running on port 3000...');
