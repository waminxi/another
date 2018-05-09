$(document).ready(function () {
    $("#loading").hide();
    $("#submit").on("click", function (event) {
        $("#loading").show();
        var params = {
            address: $("#address").val(),
            port: $("#port").val(),
            dbName: $("#dbName").val(),
        };
        $.ajax({
            data: params,
            url: '/source',
            method: 'post',
            dataType: 'json',// 此参数不确定是否有用
            cache: 'false',
            timeout: 5000,
            success: function (data) {
                var data = $.parseJSON(data);
                $("#loading").hide();
                alert(data.message);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#loading").hide();
                alert('error ' + textStatus + " " + errorThrown);
            }
        })
    });
});