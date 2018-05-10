$(document).ready(function () {
    $("#loading").hide();
    $("#submit").on("click", function (event) {
        $("#loading").show();
        var params = {
            address: $("#address").val(),
            port: $("#port").val(),
            dbName: $("#dbName").val()
        };
        $.ajax({
            data: params,
            url: '/source',
            method: 'post',
            // 预期服务器返回的数据类型。
            // 如果不指定，jQuery 将自动根据 HTTP 包 MIME 信息来智能判断，比如 XML MIME 类型就被识别为 XML。
            // 在 1.4 中，JSON 就会生成一个 JavaScript 对象，而 script 则会执行这个脚本。
            // 随后服务器端返回的数据会根据这个值解析后，传递给回调函数。
            /**
                •"xml": 返回 XML 文档，可用 jQuery 处理。
                •"html": 返回纯文本 HTML 信息；包含的 script 标签会在插入 dom 时执行。
                •"script": 返回纯文本 JavaScript 代码。不会自动缓存结果。除非设置了 "cache" 参数。注意：在远程请求时(不在同一个域下)，所有 POST 请求都将转为 GET 请求。（因为将使用 DOM 的 script标签来加载）
                •"json": 返回 JSON 数据 。
                •"jsonp": JSONP 格式。使用 JSONP 形式调用函数时，如 "myurl?callback=?" jQuery 将自动替换 ? 为正确的函数名，以执行回调函数。
                •"text": 返回纯文本字符串   
             */
            dataType: 'json',
            cache: 'false',
            timeout: 5000,
            success: function (data) {
                console.log(data);
                // 将返回的json 转为 js object
                var data = $.parseJSON(data);
                $("#loading").hide();
                console.log(data);
                alert(data.user_id);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#loading").hide();
                alert('error ' + textStatus + " " + errorThrown);
            }
        })
    });
});