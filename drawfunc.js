// Create the Canvas And the Control Panel
var ele = document.createElement('span');
ele.innerHTML="<div id='Fundraw1'><style type='text/css'>canvas {    cursor: pointer;    border: solid #D2D2D2 1px;    margin: 20px auto;}#Funpanel{    position: fixed;    top: 12px;    left: 23px;    width: 420px;}#Funpanel *:not(input){    -moz-user-select: none;-o-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;}#FunpanelCon {    position: relative;    top: -5px;    width: 100%;    line-height: 38px;    position: relative;    background-color: white;    padding: 7px 16px;    border: #2196F3 solid 1px;    border-bottom-left-radius: 5px;    border-bottom-right-radius: 5px;}#FunpanelTi{    color: white;    font-size: 15px;    padding: 3px 17px 5px 17px;    width: 100%;    height: 23px;    background-color: #2196F3;    border-radius: 5px;}.slAdst {    display: inline-block;    position: relative;    top: -1px;    left: -51px;}input[type='text']{    border: 1px solid #2196F3;    border-radius: 4px;    padding-left: 6px;    height: 19px;    margin-right: 30px;}input.up{    top: -15px;    border-top-right-radius: 4px;}input.down{    border-bottom-right-radius: 4px;    top: -4px;    line-height: 8px;}.slAdstBtn {    line-height: 11px;    position: absolute;    height: 12px;    width: 21px;    padding: 0;    background-color: white;    border: #2196F3 1px solid;    color: #2196F3;}.chk_1 {     display: none; }  .chk_1 + label {    font-size: 12px;    border: 1px solid #008eff;    padding: 3px 9px;    border-radius: 5px;    position: relative;    margin-right: 30px;    height: 30pxl;} .chk_1 + label:active {     box-shadow: 0 1px 2px rgba(0,0,0,0.05); }  .chk_1:checked + label {    background-color: #e5f3ff;    border: 1px solid #0093ff;    color: #243441;}  .chk_1:checked + label:after {    content: '✔';    top: 0px;    left: 4px;    color: #0094ff;    font-size: 1em;    position: relative;} input[type='checkbox']{    background-color:white;    border:red 1px solid;}.ctlbar {    margin-left: 10px;    display: inline-block;    height: 20px;    width: 293px;    position: relative;    top: 5px;}.ctlbarLine {    height: 10px;    border-bottom: black solid 1px;}.ctlbarDigt {    text-align: center;    width: 40px;    background-color: white;    display: inline-block;    position: absolute;    font-size: 18px;    top: -7px;    padding: 0 5px;    font-family: 'Calibri';}</style><div id='Funpanel'><div id='FunpanelTi'>Control Panel</div><div id='FunpanelCon'><input type='text' onchange='Fundraw()' value='200' id='jx'><span class='slAdst'><input class='slAdstBtn up' type='button' value='+' onclick='Funchange(this,10)'><input class='slAdstBtn down' type='button' value='-' onclick='Funchange(this,-10)'></span><input type='text' onchange='Fundraw()' value='200' id='jy'><span class='slAdst'><input class='slAdstBtn up' type='button' value='+' onclick='Funchange(this,10)'><input class='slAdstBtn down' type='button' value='-' onclick='Funchange(this,-10)'></span><br><input type='text' onchange='Fundraw()' value='300' id='dx'><span class='slAdst'><input class='slAdstBtn up' type='button' value='+' onclick='Funchange(this,10)'><input class='slAdstBtn down' type='button' value='-' onclick='Funchange(this,-10)'></span><input type='text' onchange='Fundraw()' value='300' id='dy'><span class='slAdst'><input class='slAdstBtn up' type='button' value='+' onclick='Funchange(this,20)'><input class='slAdstBtn down' type='button' value='-' onclick='Funchange(this,-20)'></span><br><input type='checkbox' class='chk_1' onclick='Funcline()' id='line' checked><label for='line'>连线</label><label for='zoom'>缩放速率：  </label><input type='text' id='zoom' value='20'><br><label for='a'>a</label><div class='ctlbar' value='0' min='-10' max='10'><div class='ctlbarLine'></div><span class='ctlbarDigt'></span></div><br><label for='b'>b</label><div class='ctlbar' value='0' min='-10' max='10'><div class='ctlbarLine'></div><span class='ctlbarDigt'></span></div><br><label for='c'>c</label><div class='ctlbar' value='0' min='-10' max='10'><div class='ctlbarLine'></div><span class='ctlbarDigt'></span></div><br><label for='k'>k</label><div class='ctlbar' value='0' min='-10' max='10'><div class='ctlbarLine'></div><span class='ctlbarDigt'></span></div></div></div><canvas id='can'></canvas></div>"
funcgraph.appendChild(ele);
line = true;
w = funcgraph.clientWidth;
h = funcgraph.clientHeight - 20;
color = ['#F44336', '#9C27B0', '#3F51B5', '#00BCD4', '#4CAF50', '#FFC107', '#795548', '#607D8B']
sing = 150;
Number.prototype.GetRound = function(len) {　　
    return Math.round(this * Math.pow(10, len)) / Math.pow(10, len);
}

//Data Process
function isProperNum(numlist) {
    if (typeof numlist == 'Number') {
        num = [];
        num[0] = numlist;
    } else if (numlist instanceof Array) {
        num = numlist;
    }
    for (var i = 0; i < num.length; i++) {
        if (Number(num[i]) == Infinity || isNaN(num[i])) {
            return false
        };
    };
    return true
}

function toPi(num) {
    if (Math.abs(num) > 1 && (Math.abs(num % Math.PI) <= 0.01 || Math.abs(Math.PI % num) <= 0.01)) {
        var a = (num / Math.PI).GetRound(2)
        if (a == 1) {
            a = ''
        }
        if (a == -1) {
            a = '-'
        };
        return a + 'π'
    }
    return num.GetRound(5)
}

// Drag
function move(e2) {
    document.getElementById('dx').value = ox + e2.clientX - x1;
    document.getElementById('dy').value = oy + e2.clientY - y1;
    Fundraw();

}

// bar.js Begins
function getColor(num) {
    r = (255 * (1 * num + 0.3) - 50).toFixed(0);
    g = (255 * (1 - 1 * num + 0.1) - 50).toFixed(0);
    b = (255 * (1 - 1 * num + 0.2) - 50).toFixed(0);
    return 'rgb(' + r + ',' + g + ',' + b + ')'
}

for (var i = $('.ctlbar').length - 1; i >= 0; i--) {
    obj = $('.ctlbar')[i];
    obj.id = i;
    var min = Number($(obj).attr('min'));
    var max = Number($(obj).attr('max'));
    var x = $(obj).attr('value');
    $(obj).find('.ctlbarDigt').html(x).css('left', (x - min) * $(obj).width() / (max - min) - $(obj).find('.ctlbarDigt').width() / 2).css('color', getColor((x - min) / (max - min)));
    $(obj).find('.ctlbarLine').css('border-bottom-color', getColor((x - min) / (max - min)));

    obj.addEventListener('wheel', function(e) {
        var min = Number($(this).attr('min'));
        var max = Number($(this).attr('max'));
        var x2 = Number((Number($(this).attr('value')) - e.deltaY / 15000 * (max - min)).toFixed(1));
        if (x2 >= min && x2 <= max) {
            var x = x2;
        } else if (x2 < min) {
            var x = min
        } else if (x2 > max) {
            var x = max
        }
        $(this).attr('value', x);
        $(this).find('.ctlbarDigt').html(x).css('left', (x - min) * $(this).width() / (max - min) - $(this).find('.ctlbarDigt').width() / 2).css('color', getColor((x - min) / (max - min)));
        $(this).find('.ctlbarLine').css('border-bottom-color', getColor((x - min) / (max - min)));
        Fundraw();
    })
}
// bar.js Ends

// Panel Move
function panelMove(e2) {
    $('#Funpanel').css('left', ox + e2.clientX - x1);
    $('#Funpanel').css('top', oy + e2.clientY - y1);
}
FunpanelTi.addEventListener('mousedown', function(e1) {

    ox = Number($('#Funpanel').css('left').slice(0, -2));
    oy = Number($('#Funpanel').css('top').slice(0, -2));
    x1 = e1.clientX;
    y1 = e1.clientY;
    document.addEventListener('mousemove', panelMove)
})
document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', panelMove);
})
// Panel Move Ends

function zoom(e) {
    j = $("#zoom").val();
    var curX = e.clientX - can.getBoundingClientRect().left
    var curY = e.clientY - can.getBoundingClientRect().top
    if (Number(document.getElementById('jx').value) <= 30) {
        document.getElementById('jx').value = (Number(document.getElementById('jx').value) * Math.pow(2, e.wheelDelta / Math.abs(e.wheelDelta))).toFixed(0)
    } else {
        document.getElementById('dx').value = (dx - ((curX - dx) / jx) * e.wheelDelta / Math.abs(e.wheelDelta) * j).toFixed(0);
        document.getElementById('jx').value = (Number(document.getElementById('jx').value) + e.wheelDelta / Math.abs(e.wheelDelta) * j).toFixed(0);
    }
    if (Number(document.getElementById('jy').value) <= 30) {
        document.getElementById('jy').value = (Number(document.getElementById('jy').value) * Math.pow(2, e.wheelDelta / Math.abs(e.wheelDelta))).toFixed(0)
    } else {
        document.getElementById('dy').value = (dy + (dy - curY) / jy * e.wheelDelta / Math.abs(e.wheelDelta) * j).toFixed(0);
        document.getElementById('jy').value = (Number(document.getElementById('jy').value) + e.wheelDelta / Math.abs(e.wheelDelta) * j).toFixed(0);
    }
    Fundraw()
}

//MAIN FUNCTION
function Fundraw(funclist) {
    //Data Preparation
    if (typeof funclist == 'function') {
        func = [];
        func[0] = funclist;
    } else if (funclist instanceof Array) {
        func = funclist;
    }
    a = Number($("#0").attr('value'));
    b = Number($("#1").attr('value'));
    c = Number($("#2").attr('value'));
    k = Number($("#3").attr('value'));
    can.width = w;
    can.height = h;
    if (!isProperNum([document.getElementById('jx').value, document.getElementById('jy').value, document.getElementById('dx').value, document.getElementById('dy').value])) {
        document.getElementById('jx').value = 200;
        document.getElementById('jy').value = 200;
        document.getElementById('dx').value = 200;
        document.getElementById('dy').value = 200;
    };
    if (Number(document.getElementById('jx').value) <= 0 || Number(document.getElementById('jy').value) <= 0) {
        document.getElementById('jx').value = 200
        document.getElementById('jy').value = 200
    };

    jx = Number(document.getElementById('jx').value);
    jy = Number(document.getElementById('jy').value);

    dx = Number(document.getElementById('dx').value);
    dy = Number(document.getElementById('dy').value);

    context = can.getContext('2d');

    //Aixs
    context.font = '15px Math'
    context.beginPath();
    context.lineWidth = 1;
    context.fillText(0, dx + 7, dy + 12)
        //x
    context.moveTo(0, dy);
    context.lineTo(w, dy);
        //y
    context.moveTo(dx, 0)
    context.lineTo(dx, h)
    context.stroke();

    //Draw the Points
    for (var j = 0; j < func.length; j++) {
        context.beginPath();
        context.lineWidth = 1;
        var prev = 0;
        context.strokeStyle = color[j % color.length];
        for (var i = 0; i <= w; i += 0.5) {
            x = (i - dx) / jx;
            y = func[j](x);
            py = dy - y * jy;
            if (line) {//Line
                if (isNaN(y)) {
                    context.arc(i, dy - prev * jy, 5, 0, 2 * Math.PI)
                } else {
                    context.lineTo(i, py)
                }
                if (i == w) {
                    context.stroke();
                }
            } else {
                context.beginPath();
                context.lineWidth = 0.5;
                if (func.length == 1) {
                    if (y >= prev) {
                        context.strokeStyle = '#FF5722'
                    } else {
                        context.strokeStyle = '#4CAF50'
                    };
                }
                context.arc(i, py, 0.25, 0, 2 * Math.PI)
                context.stroke();
                context.closePath();
            };

            prev = y;
        };
    };
    var stX = (0 - dx) / jx
    var enX = (w - dx) / jx
    var t = 0;
    var ruleX = [];
    if (jx > sing) {
        for (var i = jx; i > sing; i = i / 2) {
            t++
        };
    }else{
        for (var i = jx; i <= sing; i = i * 2) {
            t--
        };
    };
    for (var i = Math.floor(stX), j = 0;; i += 1 / Math.pow(2, t), j++) {
        if (i != 0) {
            ruleX[j] = i
        };
        if (i > enX) {
            break;
        };
    };
    for (var i = 0; i < ruleX.length; i++) {
        context.beginPath();
        context.moveTo(ruleX[i] * jx + dx, Math.max(0, Math.min(dy - 3, h - 3)))
        context.lineTo(ruleX[i] * jx + dx, Math.max(3, Math.min(dy, h)))
        context.textAlign = 'center'
        context.strokeStyle = '#9E9E9E'
        context.lineWidth = 1
        context.stroke();
        context.fillText(ruleX[i], ruleX[i] * jx + dx, Math.max(15, Math.min(dy + 16, h - 7)))
    };

    var stY = dy / jy
    var enY = (dy - h) / jy
    var t = 0;
    var ruleY = [];
    if (jy > sing) {
        for (var i = jy; i > sing; i = i / 2) {
            t++
        };
    }else{
        for (var i = jy; i <= sing; i = i * 2) {
            t--
        };
    };
    for (var i = Math.ceil(stY), j = 0;; i -= 1 / Math.pow(2, t), j++) {
        if (i != 0) {
            ruleY[j] = i
        }
        if (i < enY) {
            break;
        };

    };
    for (var i = 0; i < ruleY.length; i++) {
        context.beginPath();
        context.moveTo(Math.max(0, Math.min(dx - 3, w - 3)), -ruleY[i] * jy + dy)
        context.lineTo(Math.max(3, Math.min(dx, w)), -ruleY[i] * jy + dy)
        if (dx > w / 2) {
            context.textAlign = 'right'
            delt = -8
        } else {
            context.textAlign = 'left'
            delt = 5
        };
        context.strokeStyle = '#9E9E9E'
        context.lineWidth = 1
        context.stroke();
        context.fillText(ruleY[i], Math.max(5, Math.min(dx + delt, w - 10)), -ruleY[i] * jy + dy + 5)
    };
}

//Mouse Operation
can.addEventListener('mousedown', function(e1) {
    ox = Number(document.getElementById('dx').value);
    oy = Number(document.getElementById('dy').value);
    x1 = e1.clientX;
    y1 = e1.clientY;
    can.addEventListener('mousemove', move)
})
can.addEventListener('mouseup', function() {
    can.removeEventListener('mousemove', move);
})
can.addEventListener('mouseout', function() {
    can.removeEventListener('mousemove', move);
})
can.addEventListener('mousewheel', zoom)
can.addEventListener('mousemove', function(e) {
        var curX = e.clientX - can.getBoundingClientRect().left
        context.beginPath();
        context.textAlign = 'left'
        context.clearRect(w - 130, 0, 130, func.length * 20 + 30)
        context.fillStyle = 'black'
        context.strokeStyle = 'black'
        context.fillText('x=' + toPi((curX - dx) / jx), w - 120, 20);

        for (var i = 0; i < func.length; i++) {
            context.fillStyle = color[i % color.length]
            context.strokeStyle = color[i % color.length]
            context.fillText(!isNaN(func[i]((curX - dx) / jx)) ? 'f(x)=' + (func[i]((curX - dx) / jx)).toFixed(3) : 'Undefined', w - 120, i * 20 + 40);
        };
    })

//Control Function
function Funchange(obj, chan) {
    obj.parentNode.previousSibling.value = Number(obj.parentNode.previousSibling.value) + chan;
    Fundraw();
}

function Funcline() {
    line = !line;
    Fundraw();
}