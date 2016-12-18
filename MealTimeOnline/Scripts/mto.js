/*
*   Created by AK4TRL ‎2016-‎11‎-‎29‎ 00:50:50
*/
function addLoginAttr() {
    if ($('#nav-left')[0].innerText == "Log in") {
        $('#nav-left').attr("data-toggle", "modal");
        $('#nav-left').attr("data-target", "#loginModal");
    }
}
function addAboutAttr() {
    if ($('#about')[0].innerText == "ABOUT") {
        $('#about').attr("data-toggle", "modal");
        $('#about').attr("data-target", "#myModal");
    }
}

$("html").niceScroll({
    styler: "fb",
    cursorcolor: "#cccccc",
    cursorwidth: '6',
    cursorborderradius: '0px',
    background: '#424f63',
    spacebarenabled: false,
    cursorborder: '0',
    zindex: '1000'
});

function showTab(contentClassName, index) {
    // switch content
    var content = document.getElementsByClassName(contentClassName);
    for (var i = 0; i < content.length; ++i) {
        if (content[i].classList.contains('rstbox-current'))
            content[i].classList.remove('rstbox-current');
    }
    content[index].classList.add('rstbox-current');
}

function showSelected() {
    if (event.target.classList.contains('current'))
        return false;
    var targetParentNode = event.target.parentNode;
    for (var curNode = targetParentNode.parentNode.firstElementChild; curNode; curNode = curNode.nextElementSibling) {
        if (curNode.firstElementChild.classList.contains('current'))
            curNode.firstElementChild.classList.remove('current');
    }
    event.target.classList.add('current');
}

function showCart(obj) {
    // show cart
    var content = document.getElementsByClassName('cart');
    if (content[0].classList.contains('cart-current') == false)
        content[0].classList.add('cart-current');

    //show cart-info
    //var contentinfo = document.getElementById('cart-basket');
    //var beforecontent = document.getElementById('basic');
    //var newDiv = document.createElement('div');
    //newDiv.classList.add('cart-info');
    //console.log(newDiv);
    //
    //contentinfo.insertBefore(newDiv, beforecontent);
    $('#cart-basket').append('<div class="cart-info" data-food="' + $(obj).parent().attr('data-food') + '">'
        + '<span style="line-height:40px">' + $(obj).parent().attr('data-food-name') + '</span><span style="line-height:40px" class="pull-right">' + $(obj).parent().attr('data-food-cnt') + '</span>' +
        '</div>');

    //change index
    var eles = document.getElementById("cart-basket");
    var m = parseInt(eles.style.top);
    eles.style.top = (m + (-40)) + 'px';

    //remove disabled
    var cartcheck = document.getElementById('footercheck');
    if (cartcheck.classList.contains('disabled'))
        cartcheck.classList.remove('disabled');
}

function UpdateCard(id, cnt) {
    var sum = 0;
    $('#cart-basket .cart-info').each(function () {
        var flag = true
        if ($(this).attr('data-food') == id) {
            $(this).find('.pull-right').eq(0).html(cnt);
            if (cnt == 0) {
                var pa = document.getElementById("cart-basket");
                pa.style.top = (parseInt(pa.style.top) + 40) + 'px';
                $(this).remove();
                flag = false;
            }
        }
        if (flag) {
            var fid = parseInt($(this).attr('data-food'));
            sum += $('div[data-food=' + fid + ']').eq(0).attr('data-food-cnt') * $('div[data-food=' + fid + ']').eq(0).attr('data-food-price');
        }
    });
    $('#showprices').html(sum);
}

function cartclear(contentCheckButton) {
    var eles = document.getElementById("cart-basket");
    eles.style.top = (-40) + 'px';

    cnt = 0;

    //button change
    $("#footercheck").addClass("disabled");
}

$('.canteen-box').each(function () {
    $(this).click(function () {
        var orderlist = $(this).attr('data-canteen');
        console.log(orderlist);
        $.ajax({
            url: '/Order/addToController',
            data: JSON.stringify({ 'id': 1, 'canteenName': orderlist }),
            type: 'POST',
            dataType: "json",
            contentType: 'application/json;charset=utf-8',
            success: function (jsonResult) {
                alert(jsonResult);
            }
        });
    });
});

function UpdateFood(id, cnt) {
    $.ajax({
        url: '/Order/Modify',
        data: JSON.stringify({ 'id': id, 'cnt': cnt }),
        type: 'POST',
        dataType: "json",
        contentType: 'application/json;charset=utf-8',
        success: function (jsonResult) {
            alert(jsonResult);
        }
    });
}

$('.food-add-cart').each(function () {
    var p = $(this).parent();
    $(this).click(function () {
        p.find('.food-add-cart').hide();
        p.find('.food-cart-cnt').show();
        p.attr('data-food-cnt', 1);
        p.find('.food-cart-num').val(1);
        UpdateFood(p.attr('data-food'), p.attr('data-food-cnt'));
        showCart(this);
        UpdateCard(-1, 0);
    });
});
$('.food-cart-cnt').each(function () {
    var p = $(this).parent();
    var id = p.attr('data-food');
    p.find('.pull-right').eq(0).click(function () {
        var cnt = parseInt(p.attr('data-food-cnt'));
        cnt = Math.min(99, cnt + 1);
        if (cnt > 99) {
            alert('Cant order over 99.');
        }
        p.attr('data-food-cnt', cnt);
        p.find('.food-cart-num').val(cnt);
        UpdateFood(id, cnt);
        UpdateCard(id, cnt);
    });
    p.find('.pull-left').eq(0).click(function () {
        var cnt = parseInt(p.attr('data-food-cnt'));
        cnt = Math.max(0, cnt - 1);
        if (cnt <= 0) {
            p.find('.food-cart-cnt').eq(0).hide();
            p.find('.food-add-cart').eq(0).show();
        }
        p.attr('data-food-cnt', cnt);
        p.find('.food-cart-num').val(cnt);
        UpdateFood(id, cnt);
        UpdateCard(id, cnt);
    });
});
