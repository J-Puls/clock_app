
var refreshTime = setInterval(myTimer, 1000),
    refreshAlarm = setInterval(myAlarm, 1000),
    alarmTime,
    alarmSet = true;

function myTimer() {
    var d = new Date();
    $("#currentTime").text(d.toLocaleTimeString());
};

for (var i = 1; i <= 12; i++) {
    var opt = i;
    $("#hour").append(`<option value="${opt}">${opt}</option>`);
};
for (var i = 0; i <= 59; i++) {
    var opt = i;
    if (i < 10) {
        $("#minute").append(`<option value="0${opt}">0${opt}</option>`);
        $("#second").append(`<option value="0${opt}">0${opt}</option>`);
    } else {
        $("#minute").append(`<option value="${opt}">${opt}</option>`);
        $("#second").append(`<option value="${opt}">${opt}</option>`);
    }
}

$("#set").on("click", function () {
    if (alarmSet) {
        alarmTime = $("#hour").val() + ":" + $("#minute").val() + ":" + $("#second").val() + " " + $("#timeOfDay").val();
        $("#setTime").text(alarmTime);
        console.log(alarmTime);
        alarmSet = true;
        $("#set").addClass("clicked");
        $("#reset").removeClass("clicked");
    }
});

function alarm() {
    $(".gif").addClass("alarm");
}

function myAlarm() {
    if (alarmTime === $("#currentTime").text()) {
        alarm();
    }
}

$("#reset").on("click", function () {

    if (alarmSet) {
        alarmTime = "------------";
        $("#setTime").text(alarmTime);
        $(".gif").removeClass("alarm");
        $("#set").removeClass("clicked");
        $("#reset").addClass("clicked");
    }
})