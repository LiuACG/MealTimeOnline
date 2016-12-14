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
    for (var i = 0; i<content.length; ++i) {
        if (content[i].classList.contains('rstbox-current'))
            content[i].classList.remove('rstbox-current');
    }
    content[index].classList.add('rstbox-current');
}

function  showSelected() {
    if (event.target.classList.contains('current'))
        return false;
    var targetParentNode = event.target.parentNode;
    for (var curNode = targetParentNode.parentNode.firstElementChild; curNode; curNode = curNode.nextElementSibling) {
        if (curNode.firstElementChild.classList.contains('current'))
            curNode.firstElementChild.classList.remove('current');
    }
    event.target.classList.add('current');
}

function showCart(contentClassName, contentInfoId) {
    // show cart
    var content = document.getElementsByClassName(contentClassName);
    if (content[0].classList.contains('cart-current')==false)
        content[0].classList.add('cart-current');

    //show cart-info
    var contentinfo = document.getElementById(contentInfoId);
    var beforecontent = document.getElementById('basic');
    var newDiv = document.createElement('div');
    newDiv.classList.add('cart-info');

    contentinfo.insertBefore(newDiv, beforecontent);

    //change index
    var eles = document.getElementById("cart-basket");
    var m = parseInt(eles.style.top);
    eles.style.top = (m + (-40)) + 'px';

    //remove disabled
    var cartcheck = document.getElementById('footercheck');
    if (cartcheck.classList.contains('disabled'))
        cartcheck.classList.remove('disabled');
}

function cartclear(contentCheckButton) {
    var eles = document.getElementById("cart-basket");
    eles.style.top = (-40) + 'px';

    //button change
    $("#footercheck").addClass("disabled");
}
