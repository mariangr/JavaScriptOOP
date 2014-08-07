$(document).ready(function () {
    movingShapes.addEvents();
    setInterval(function () { movingShapes.move(); }, 100);
}
)

var movingShapes = (function () {
    var angle = 0;
    var radius = 50;
    var rectangleX = 300;
    var rectangleY = 100;
    var endX = 850;
    var endY = 450;
    var rectangleSpeed = 5;

    function addEvents() {
        $('#rect').on('click', function () { movingShapes.add('rect') });
        $('#ellipse').on('click', function () { movingShapes.add('ellipse') });
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomColor() {
        return "rgb(" + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ')';
    }

    function createStrong(text) {
        var result = document.createElement('strong');
        result.appendChild(document.createTextNode(text));
        return result;
    }

    var GenerateDiv = function () {
        var newDiv = document.createElement('div');
        newDiv.style.width = 100 + 'px';
        newDiv.style.height = 100 + 'px';
        newDiv.style.backgroundColor = getRandomColor();
        newDiv.style.color = getRandomColor();
        newDiv.style.textAlign = 'center';
        newDiv.style.position = 'absolute';
        newDiv.style.top = rectangleY + 'px';
        newDiv.style.left = rectangleX + 'px';
        newDiv.style.borderRadius = getRandomInt(0, 50) + '%';
        newDiv.style.borderColor = getRandomColor();
        newDiv.appendChild(createStrong("div"));
        


        return newDiv;
    }

    function Add(type) {
        var newDiv = GenerateDiv();
        if (type == "rect") {
            newDiv.id = "rectangle-movement-div";
            newDiv.setAttribute("direction", "right");
        }
        if (type === "ellipse") {
            newDiv.id = "ellipse-movement-div";
        }
        $('body').append($(newDiv));
    }

    function Move() {
        var rectangleDivs = $('body').find('div#rectangle-movement-div');
        var len = rectangleDivs.length;

        for (var i = 0; i < len; i++) {
            var x;
            var y;
            var div = rectangleDivs[i];
            var direction = div.getAttribute("direction");

            if (direction == "right") {
                y = rectangleY;
                div.style.top = y + "px";
                div.style.left = parseInt(div.style.left) + rectangleSpeed + "px";

                if (parseInt(div.style.left) >= endX) {
                    $(div).attr('direction', "down");
                }

            }
            else if (direction == "down") {
                x = endX;
                div.style.top = parseInt(div.style.top) + rectangleSpeed + "px";
                div.style.left = x + "px";

                if (parseInt(div.style.top) >= endY) {
                    $(div).attr('direction', "left");
                }

            }
            else if (direction == "left") {
                y = endY;
                div.style.top = y + "px";
                div.style.left = parseInt(div.style.left) - rectangleSpeed + "px";

                if (parseInt(div.style.left) <= rectangleX) {
                    $(div).attr('direction', "up");
                }

            }
            else if (direction == "up") {
                x = rectangleX;

                div.style.top = parseInt(div.style.top) - rectangleSpeed + "px";
                div.style.left = x + "px";

                if (parseInt(div.style.top) <= rectangleY) {
                    $(div).attr('direction', "right");
                }

            }
        }




        var ellipseDivs = $('body').find('div#ellipse-movement-div');
        for (var i = 0; i < ellipseDivs.length; i++) {
            var currentDiv = ellipseDivs[i];
            currentDiv.style.left = 300 + Math.cos(angle + 2 * Math.PI / ellipseDivs.length * i) / radius * 10000 + 'px';
            currentDiv.style.top = 300 + Math.sin(angle + 2 * Math.PI / ellipseDivs.length * i) / radius * 10000 + 'px';
        }
        angle = angle + 0.1;
    }

    return {
        add: Add,
        move: Move,
        addEvents: addEvents
    }
    
})();

function addNewElement(type) {
    movingShapes.add(type);
}