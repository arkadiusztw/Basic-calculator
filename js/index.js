var result = document.getElementById("result");
var alert = document.getElementById("alert");
var action = document.getElementById("action");
var parentL = document.getElementById("buttons-l");
const actionsArray = [",", "%", "/", "*", "+", "-", "."];

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function noDoubleActions() {
    if (actionsArray.indexOf(result.value.slice(-1)) === -1) {
        result.value += this.value;
    } else {}
}


function doActionValue() {
    result.value += this.value;
}

function deleteSymbol() {
    var cut = result.value.substring(0, result.value.length - 1);
    result.value = cut;
}

function deleteResult() {
    result.value = "";
}

function sumResult() {
    var sum = eval(result.value);
    if (sum === undefined | sum === NaN) {
        alert.value = "type something first";
        sleep(4000).then(() => {
            alert.value = "";
        });
    } else {
        result.value = sum;
    }

}

for (var i = 1; i <= 9; i++) {
    var createButtonsL = document.createElement("button");
    createButtonsL.className = "digits";
    createButtonsL.setAttribute("id", "digits");
    createButtonsL.setAttribute("value", i);
    createButtonsL.innerHTML = i;
    createButtonsL.onclick = function () {
        result.value += this.value;
        temp1 = result.value;
    }
    parentL.appendChild(createButtonsL);
}

function init() {

    for (i = 0; i <= 6; i++) {
        document.getElementById("actions" + i).onclick = noDoubleActions;
        document.getElementById("actionsO").onclick = doActionValue;
        document.getElementById("deleteButton").onclick = deleteSymbol;
        document.getElementById("actionsEqual").onclick = sumResult;
        document.getElementById("actionsAC").onclick = deleteResult;
    }
}