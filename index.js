var height = "innerHeight" in window 
               ? window.innerHeight
               : document.documentElement.offsetHeight; 

function CountDownTimerHour(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        document.getElementById(id).innerHTML = "";
        document.getElementById(id).innerHTML += hours + 'hrs ';
        document.getElementById(id).style.top = Math.floor((Math.random() * height)) - document.getElementById(id).clientHeight/2 + "px"; 
        document.getElementById(id).style.transform = "rotate("+Math.floor((Math.random() * 10)-10)+"deg)";
    }

    timer = setInterval(showRemaining, 1000);
}

function CountDownTimerMin(dt, id)
{
    var end = new Date(dt);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    lastTen = 0;
    lastMinutes = 0;
    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        document.getElementById(id).innerHTML = "";
        if (minutes != lastMinutes) {
            document.getElementById(id).innerHTML += "<span class=\"highlight\">"+minutes+"</span>";
        } else {
            document.getElementById(id).innerHTML += minutes;
        }
        lastMinutes = minutes;
        document.getElementById(id).innerHTML += 'min <br>';
        if (lastTen != Math.floor((seconds-1)/10)) {
            lastTen = Math.floor(seconds/10);
            document.getElementById(id).innerHTML += "<span class=\"highlight\">"+seconds+"</span>";
        } else if (seconds > 9) {
            document.getElementById(id).innerHTML += seconds.toString()[0]+"<span class=\"highlight\">"+seconds.toString()[1]+"</span>";
        } else {
            document.getElementById(id).innerHTML += "<span class=\"highlight\">"+seconds+"</span>";
        }
        document.getElementById(id).innerHTML += ' sec';
    }

    timer = setInterval(showRemaining, 1000);
}

