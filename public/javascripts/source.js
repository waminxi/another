var jsdom = require('jsdom');
var $ = require('jquery')(jsdom.jsdom().defaultView);

$("#submit").on("click", function (event) {
    $("#loading").hide();
});