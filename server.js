// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// // // // KOMUTLAR-DOCS sayfası // // // //
app.get('/docs', function(request, response) {
  response.sendFile(__dirname + '/views/docs.html');
});
// // // // DAVET-İNVİTE sayfası // // // //
app.get('/davet', function(request, response) {
  response.sendFile(__dirname + '/views/invite.html');
});
// // // // SUNUCU-HELP sayfası // // // //
app.get('/help', function(request, response) {
  response.sendFile(__dirname + '/views/goto-recnd.html');
});
// // // // BAŞVURU-Application sayfası // // // //
app.get('/ticket', function(request, response) {
  response.sendFile(__dirname + '/views/başvuru.html');
});
// // // // BAŞVURU-Application sayfası // // // //
app.get('/yandex_5acc5766883ddcfb.html', function(request, response) {
  response.sendFile(__dirname + '/views/yandex_5acc5766883ddcfb.html');
});
// // // // TEAM sayfası // // // //
app.get('/ekip', function(request, response) {
  response.sendFile(__dirname + '/views/team.html');
});
// // // // MELEKHOCA sayfası // // // //
app.get('/melekhocama', function(request, response) {
  response.sendFile(__dirname + '/views/melek-hoca.html');
});
// // // // SAİMEHOCA sayfası // // // //
app.get('/saimehocama', function(request, response) {
  response.sendFile(__dirname + '/views/saime-hoca.html');
});
// // // // MEHMET sayfası // // // //
app.get('/annecim', function(request, response) {
  response.sendFile(__dirname + '/views/mehmet.html');
});




// // // // Demo sayfası // // // //
app.get('/demosite', function(request, response) {
  response.sendFile(__dirname + '/DEMOLAR/demo.html');
});





// // // // Bot 2 Saniye sayfası // // // //
app.get('/bot/2saniye', function(request, response) {
  response.sendFile(__dirname + '/views/bot/2saniye.html');
});
// // // // Bot Vote sayfası // // // //
app.get('/bot/vote', function(request, response) {
  response.sendFile(__dirname + '/views/bot/vote.html');
});
// // // // Bot DDOS Koruma sayfası // // // //
app.get('/bot/HideDOS', function(request, response) {
  response.sendFile(__dirname + '/views/bot/hidedos.html');
});
// // // // Bot Tos sayfası // // // //
app.get('/bot/tos', function(request, response) {
  response.sendFile(__dirname + '/views/bot/tos.html');
});






////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////









// // // // DENEME SAYFASI sayfası // // // //
app.get('/3954312ccxxx.as.da.', function(request, response) {
  response.sendFile(__dirname + '/views/index1.html');
});

// // // // 404 sayfası // // // //

app.get('*', function(req, res){
  res.sendFile(__dirname + '/views/404.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
