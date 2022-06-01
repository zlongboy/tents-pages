//Open the json file and then populate learnjs.html with the data from the json file. 
//document.getElementsByTagName()
//document.getElementById()
//innerHTML();

var getBullets = (function(app) {
    var getRaw = function(path) {
        return new Promise(function(resolve, reject) {
            var raw = new XMLHttpRequest();
            raw.overrideMimeType('application/json');
            raw.open('GET', path);
            raw.timeout = 2000;
            raw.onload = function() {
                if (raw.readyState === 4 && raw.status >= 200) {
                    //resolve(rawParsed = JSON.parse(raw.responseText))
                    resolve(JSON.parse(raw.responseText))
                }
                else reject(raw.statusText)
            };
            raw.send(null);
        })
    };

    var displayContent = function(bulletText, headerText) {
        var heading = document.querySelector('.title');
        var bulletItems = [...document.querySelectorAll('li')]
        //var parent = document.querySelector('#bullet-list');
        //var children = [...parent.children];
        heading.innerHTML = headerText;
        bulletItems.forEach(function(e, i) {
            e.innerHTML = bulletText[i];
        });
    }

    getRaw('data.json').then(function(parsedResponse) {
        var bullets = [];
        var header = parsedResponse.heading
        var orderedBullets = parsedResponse.bullets.sort(function(a, b) {
            return (a.bulletOrder > b.bulletOrder) ? 1 : -1;
        });

        orderedBullets.forEach(function(e) {
            bullets.push(e.bulletBody);
        });        

        displayContent(bullets, header);
    }).catch(function(errorResponse) {
            console.log("Network error: " + errorResponse);
        })

    return app;
})(getBullets || {});