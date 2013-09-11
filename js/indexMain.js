
window.onload = function () {

    // heatmap configuration
    var config = {
        element: document.getElementById("heatmapArea"),
        radius: 20,
        opacity: 50,
        legend: {
            position: 'br',
            title: 'Mouse Movement Distribution'
        }
    };

    //creates and initializes the heatmap
    var heatmap = h337.create(config);

    var active = true,
        idle = false,
        over = false,
        x = 0,
        y = 0,
        simulate = false;

    // activate capture mode
    setInterval(function () {
        active = true;
    }, 80);

    // check whether the mouse is idling
    var idlechecker = setInterval(function () {
        if (over && !simulate) {
            // if it's idling -> start the simulation 
            // and add the last x/y coords
            simulate = setInterval(function () {
                heatmap.store.addDataPoint(x, y, 1);
            }, 1000);
        }
    }, 150);

    var add = function (e) {
        x = e.layerX;
        y = e.layerY
        heatmap.store.addDataPoint(x, y, 1);
    };

    var element = document.getElementById("heatmapArea");

    element.onmousemove = function (e) {
        over = true;
        if (simulate) {
            clearInterval(simulate);
            simulate = false;
        }

        if (active) {
            add(e);
            active = false;
        }
    };
    element.onclick = function (e) {
        add(e);
    };
    element.onmouseout = function () {
        over = false;
    };
};