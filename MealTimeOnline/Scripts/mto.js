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

/**
 * 切换面板的函数
 * @param contentClassName - 面板容器的类名
 * @param index - 标签的对应下标(第几个标签)
 * @returns {boolean}
 */
function showTab(contentClassName, index) {
    // switch tab
    if (event.target.classList.contains('current'))
        return false;
    var targetParentNode = event.target.parentNode;
    for (var curNode = targetParentNode.firstElementChild; curNode; curNode = curNode.nextElementSibling) {
        if (curNode.classList.contains('current'))
            curNode.classList.remove('current');
    }
    event.target.classList.add('current');

    // switch content
    var content = document.getElementsByClassName(contentClassName);
    for (var i = 0; i<content.length; ++i) {
        if (content[i].classList.contains('current'))
            content[i].classList.remove('current');
    }
    content[index].classList.add('current');

    return false;
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