$(document).ready(function () {
    specialConsole.writeLine("Message: {0}", "Hello")
    specialConsole.writeError("{0}{1}{2}", "This ", "is ", "an error!!!");
    specialConsole.writeWarning("This is a warning. You shall not pass.")
})

var specialConsole = (function () {
    function writeLine(message) {
        if (arguments.length > 1) {
            var message = arguments[0] + '';
            var startIndex = message.indexOf('{');
            var endIndex = message.indexOf('}', endIndex + 1);
            while (startIndex != -1) {
                var currentElement = message.substring(startIndex + 1, endIndex) * 1;
                message = message.replace("{" + currentElement + "}", arguments[currentElement + 1]);
                startIndex = message.indexOf('{', startIndex + 1);
                endIndex = message.indexOf('}', endIndex + 1);
                
            }
        }
        console.log(message)
    }

    function writeError(message) {
        message = "Error: " + message;
        if (arguments.length > 1) {
            var message = arguments[0] + '';
            var startIndex = message.indexOf('{');
            var endIndex = message.indexOf('}', endIndex + 1);
            while (startIndex != -1) {
                var currentElement = message.substring(startIndex + 1, endIndex) * 1;
                message = message.replace("{" + currentElement + "}", arguments[currentElement + 1]);
                startIndex = message.indexOf('{', startIndex + 1);
                endIndex = message.indexOf('}', endIndex + 1);

            }
        }
        console.log(message)
    }

    function writeWarning(message) {
        arguments[0] = "Warning: " + arguments[0];
        if (arguments.length > 1) {
            var message = arguments[0] + '';
            var startIndex = message.indexOf('{');
            var endIndex = message.indexOf('}', endIndex + 1);
            while (startIndex != -1) {
                var currentElement = message.substring(startIndex + 1, endIndex) * 1;
                message = message.replace("{" + currentElement + "}", arguments[currentElement + 1]);
                startIndex = message.indexOf('{', startIndex + 1);
                endIndex = message.indexOf('}', endIndex + 1);

            }
        }
        console.log(message)
    }

    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning
    }



})()