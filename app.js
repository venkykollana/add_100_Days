const express = require("express");

const app = express();

const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let add100DaysToDate = addDays(new Date(), 100);
  let datemsg = `${add100DaysToDate.getDate()}/${
    add100DaysToDate.getMonth() + 1
  }/${add100DaysToDate.getFullYear()}`;
  response.send(datemsg);
});

app.listen(3000);

module.exports = app;
