var $d = $d || {}
$d.p = $d.p || {}
!function () {
    if (typeof ($) == 'undefined' || typeof ($) == undefined) {
        console.log('请先引用jquery.js, 定义$d失败')
        return
    }
    if (typeof ($.url) == 'undefined' || typeof ($.url) == undefined) {
        console.log('请先引用purl.js, 定义$d.p.url失败')
        return
    } else {
        $d.p.url = $.url()
    }
    if (typeof (Browser) == 'undefined' || typeof (Browser) == undefined) {
        console.log('请先引用Browser.js, 定义$d.p.operSysType失败')
        return
    } else {
        var browser = new Browser()
        $d.p.browser = browser
        $d.p.operSysType = 'iOS' == browser.os ? 'iOS' : 'Android'; // 安卓:1, iOS:2
    }
    $d.timeFmt = function (fmt, time) {
        fmt = fmt || 'yyyy-MM-dd HH:mm:ss'
        var now = time || new Date()
        var yyyy = now.getFullYear()
        var MM = now.getMonth() + 1
        var dd = now.getDate()
        var HH = now.getHours()
        var mm = now.getMinutes()
        var ss = now.getSeconds()
        return fmt.replace('yyyy', yyyy).replace('MM', MM).replace('dd', dd).replace('HH', HH).replace('mm', mm).replace('ss', ss)
    }
    $d.urlParam = function (name) {
        var value = $d.p.url.param(name)
        return null != value ? typeof value == 'string' ? value == 'undefined' ? '' : value : value[value.length - 1] : ''
    }
    $d.ssnParam = function (name, value) {
        if (name && value) {
            sessionStorage.setItem(name, value)
            return value
        } else {
            return sessionStorage.getItem(name)
        }
    }
    $d.qrUrlDecode = function (url) {
        var data = {
            url: url
        }
        var decode = ''
        $.post({
            url: '/qr/decodeUrl',
            contentType: 'application/json;charset=UTF-8',
            async: false,
            data: JSON.stringify(data),
            success: function (res) {
                console.log(res)
                decode = res
            }
        })
        return decode
    }
    // 绑定页面数据
    $d.render = function () {
        $('[a-html-url]').each(function (i, e) {
            $(e).html($d.urlParam($(e).attr('a-html-url')))
        })
        $('[a-html-ssn]').each(function (i, e) {
            $(e).html(sessionStorage.getItem($(e).attr('a-html-ssn')))
        })
    }
    // copy
    $d.jsCopy = function jsCopy(obj) {
        var u = navigator.userAgent;
        //苹果
        if (u.match(/(iPhone|iPod|iPad);?/i)) {
            var range = document.createRange();
            // 选中需要复制的节点
            range.selectNode(document.getElementById(obj.id))
            window.getSelection().addRange(range);
            document.execCommand('copy');
            // 移除选中的元素
            window.getSelection().removeAllRanges();
        }
        // 安卓
        if (u.indexOf('Android') > -1) {
            var copyText = document.getElementById("a-copy-text");
            copyText.innerHTML = document.getElementById(obj.id).innerHTML.replace(/<[^>]+>/g, "");
            copyText.select();
            document.execCommand("Copy");
        }
    }
    $d.openAlipay = function (url, target, mode) {
        if (!target) target = "_self"
        // mode == 0, 无中间页面
        if (!mode || 0 == mode) {
            window.open("alipays://platformapi/startapp?saId=10000007&clientVersion=3.7.0.0718&qrcode=" + encodeURIComponent(url), target)
            return
        }
        // mode == 1, 有中间页面
        if (mode || 1 == mode) {
            window.open('https://render.alipay.com/p/s/i?scheme=' + encodeURIComponent('alipays://platformapi/startapp?saId=10000007&clientVersion=3.7.0.0718&qrcode=' + encodeURIComponent(url)), target)
            return
        }
    }
    $d.setLocalStorage = function(url, k, v) {
        if (!$d.urlParam('xxxxDone')) {
            // 当前url默认认为有?
            if (url.indexOf('?') < 0) {
                url += '?'
            }
            url += ('&xxxxK=' + k + '&xxxxV=' + v + '&backUrl=' + encodeURIComponent(window.location.href))
            window.location.href = url
        }
    }
    // 设置应用参数
    $d.p.baseUrl = "/diamond/"
}()
