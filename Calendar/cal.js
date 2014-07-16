/**
 * Created by syapeng on 7/8/2014.
 */
/*global document, window, console: false */
var today = new Date();
var notes = {};
var curDate = new Date();
var refreshDateBoard;

function getNoteKey() {
    return curDate.getDate() + curDate.getMonth() * 35 + curDate.getYear() * 400;
}

function saveNotes() {
    var key = getNoteKey();
    notes[key] = document.getElementById("notecontent").value;
}

document.getElementById("notecontent").onchange = saveNotes;
document.getElementById("notecontent").onkeyup = saveNotes;

//D&D
document.getElementById("title").onmousedown = function () {
    var movingPart = document.getElementsByClassName("calendar-container")[0];

    document.onmousemove = function (e) {
        e = e || window.event;
        var startX = e.clientX, startY = e.clientY;

        movingPart.style.left = startX + "px";// + diffx + "px";
        movingPart.style.top = startY + "px";// + diffy + "px";
        console.log(startX + " " + startY);
    };

    document.onmouseup = function () {
        document.onmousemove = null;
    };
};

function checkLeapMonth(y) {
    var days = 28, date = new Date();

    date.setFullYear(y);
    date.setMonth(1);
    date.setDate(29);

    if (date.getDate() === 29) {
        days = 29;
    }

    return days;
}

function getFirstDay(year, month) {
    var date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(1);

    return date.getDay() % 7;
}

function tableToArray() {
    var ret = [], tableData = document.getElementById("cal"), i, j;

    for (i = 2; i < 8; i++) {
        for (j = 0; j < tableData.rows[1].cells.length; j++) {
            ret.push(tableData.rows[i].cells[j]);
        }
    }
    return ret;
}

function clickDay(e) {
    var cur, key;

    e = e || window.event;
    e = e.target || e.srcElement;

    cur = e.innerHTML;
    if (isNaN(Number(cur))) {
        cur = e.childNodes[0].innerHTML;
    }

    curDate.setDate(cur);
    refreshDateBoard();

    key = getNoteKey();
    document.getElementById("notecontent").value =  !notes[key] ? "" : notes[key];
}

refreshDateBoard = function () {
    var date = curDate,
        month = date.getMonth(),
        year = date.getFullYear(),
        title = document.getElementById("title"),
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        firstDay = getFirstDay(year, month),
        daysInMonth = [31, checkLeapMonth(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        dayTable = tableToArray(),
        dayCell,
        num,
        i;

    title.innerHTML = months[month] + " " + year;

    //days of former month
    for (i = 0; i < firstDay; i++) {
        dayCell = dayTable[i];
        dayCell.bgColor = "lightgray";
        num = daysInMonth[(month === 0) ? 11 : (month - 1)] + 1 - firstDay + i;
        dayCell.innerHTML = num;
        dayCell.style.color = "gray";
    }

    //days of current months
    for (i = 1; i <= daysInMonth[month]; i++) {
        dayCell = dayTable[firstDay + i - 1];
        dayCell.innerHTML = i;
        if (i === today.getDate() && month === today.getMonth()) {
            dayCell.bgColor = "yellow";
        } else {
            dayCell.bgColor = "white";
        }

        if (i === curDate.getDate()) {
            dayCell.innerHTML = i;
            dayCell.style.color = "red";
        } else {
            dayCell.style.color = "black";
        }
        dayCell.onclick = clickDay;
    }

    //days of latter month
    for (i = firstDay + daysInMonth[month]; i < 42; i++) {
        dayCell = dayTable[i];
        dayCell.bgColor = "lightgray";
        num = i - firstDay - daysInMonth[month] + 1;
        dayCell.innerHTML = num;
        dayCell.style.color = "gray";
    }
};

document.getElementById("back").onclick = function () {
    curDate.setMonth(curDate.getMonth() - 1);
    refreshDateBoard();
};

document.getElementById("forward").onclick = function () {
    curDate.setMonth(curDate.getMonth() + 1);
    refreshDateBoard();
};

refreshDateBoard();
