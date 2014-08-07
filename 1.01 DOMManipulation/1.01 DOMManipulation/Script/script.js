var domModule = (function () {
    var selectorBuffer = [];
    var elementsBuffer = [];

    function appendChild(element, select) {
        $(select).append($(element));
    }

    function removeChild(parent, selector) {
        selector = selector || "";
        $(parent + " " + selector).remove();
    }

    function addHandler(selector, event, funct) {
        $(selector).on(event, funct);
    }

    function appendToBuffer(selector, element) {
        selectorBuffer.push(selector || "");
        elementsBuffer.push(element || "");
        if (elementsBuffer.length >= 5) {
            for (var i = 0; i < elementsBuffer.length; i++) {
                appendChild(elementsBuffer[i], selectorBuffer[i]);
            }
            elementsBuffer = [];
            selectorBuffer = [];
        }
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        appendToBuffer: appendToBuffer
    }

}());

$(document).ready(function () {
    domModule.appendChild('<div id="experiment-div">', 'body');
    domModule.appendChild('<div id="div-for-buffer">', 'body')
    domModule.appendChild('<ul>', '#experiment-div');
    domModule.appendChild('<li id="1">1</li>', 'ul');
    domModule.appendChild('<li>5<li>', 'ul');
    domModule.appendChild('<li>', 'ul');
    domModule.appendChild('<li>', 'ul');
    domModule.removeChild("ul", "li:first-child");
    domModule.addHandler("a.button", 'click', function () { alert("Clicked") });
    domModule.appendToBuffer("#div-for-buffer", '<div id="some-div">');
    domModule.appendToBuffer("#some-div", '<div id="first-div">');
    domModule.appendToBuffer("#some-div", '<div id="second-div">');
    domModule.appendToBuffer("#first-div", '<ul id="first-list">');
    domModule.appendToBuffer("#first-list", '<li>first li of first list</li>');
    domModule.appendToBuffer("#first-list", '<li>second li of first list</li>');
    domModule.appendToBuffer("#second-div", '<div id="some-div">');
    domModule.appendToBuffer("#second-div", '<ul id="second-list">');
    domModule.appendToBuffer("#second-list", '<li>first li of second list</li>');
    domModule.appendToBuffer("#second-list", '<li>second li of second list</li>');
    domModule.appendToBuffer("#second-list", '<li>third li of second list</li>');

    //domModule.appendToBuffer("", );


}
)