var MAINAPP = (function(app) {
    var activeQuestions = {};

    var getQuestions = function(path) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', path);
        xobj.setRequestHeader('Access-Control-Allow-Origin', null)
        xobj.onreadystatechange = function() {
            if (xobj.readyState === 4) {
                app.activeQuestions = JSON.parse(xobj.responseText)
            }
        };
        xobj.send(null);
    };

    //Public
    app.activeQuestions = activeQuestions;
    app.getQuestions = getQuestions;

    return app;
})(MAINAPP || {});