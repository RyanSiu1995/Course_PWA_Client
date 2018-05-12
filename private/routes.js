const axios = require('axios');

module.exports = (app, serverAddress) => {
  app.get('/api/info', function (req, res) {

    axios.get(serverAddress + '/course_info/?format=json')
      .then(function (response) {
        console.log(response.data);
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.send(error.toString());
      });

  });

  app.get('/api/lectures', function (req, res) {

    axios.get(serverAddress + '/lt_note/?format=json')
      .then(function (response) {
        //console.log(response.data);
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.send(error.toString());
      });

  });

  app.get('/api/assignments', function (req, res) {

    axios.get(serverAddress + '/assignment/?format=json')
      .then(function (response) {
        //console.log(response.data);
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.send(error.toString());
      });

  });

  app.get('/api/tutorials', function (req, res) {

    axios.get(serverAddress + '/tutorial_note/?format=json')
      .then(function (response) {
        console.log(response.data);
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.send(error.toString());
      });

  });


  app.get('/api/staff', function (req, res) {

    axios.get(serverAddress + '/teaching_staff/?format=json')
      .then(function (response) {
        console.log(response.data);
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.send(error.toString());
      });

  });

};