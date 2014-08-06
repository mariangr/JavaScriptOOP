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
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        appendToBuffer: appendToBuffer
    }

}());

$(document).ready(function () {
    domModule.appendChild('<div>', 'body');
    domModule.appendChild('<ul>', 'div');
    domModule.appendChild('<li id="1">1</li>', 'ul');
    domModule.appendChild('<li>5<li>', 'ul');
    domModule.appendChild('<li>', 'ul');
    domModule.appendChild('<li>', 'ul');
    domModule.removeChild("ul", "li:first-child");
    domModule.addHandler("a.button", 'click', function () { alert("Clicked") });
    domModule.appendToBuffer("container", div.cloneNode(true));
    domModule.appendToBuffer("#main-nav ul", navItem);


}
)