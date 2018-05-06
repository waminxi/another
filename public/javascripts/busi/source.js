var dbconnect = require(["./db"],function(){
    alert("load finished");
});

function connect() {
    var mongoIp = $('#address').val();
    var mongoPort = $('#port').val();
    connect(mongoIp, mongoPort, 'cdn');
}