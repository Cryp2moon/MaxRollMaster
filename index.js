let item1Result = "";
let item2Result = "";
let item3Result = "";
let item4Result = "";
let item5Result = "";

$(document).ready(function(){
    defaultRoll();
    $("#simulate").click(function () {
        simulate();
        $("#simulateDiv").hide();
        $("#resetDiv").show();
    });
    $("#reset").click(function () {
        reset();
        $("#simulateDiv").show();
        $("#resetDiv").hide();
    });
});

function defaultRoll() {
    item1Result = rollBasic();
    updateUI(1, 0, item1Result);
    item2Result = rollBasic();
    updateUI(2, 0, item2Result);
    item3Result = rollBasic();
    updateUI(3, 0, item3Result);
    item4Result = rollBasic();
    updateUI(4, 0, item4Result);
    item5Result = rollBasic();
    updateUI(5, 0, item5Result);
}

function updateUI(index, rollCount, result) {
    $(`#badge${index}`).html(`${rollCount}/10`);
    if (result == "M") {
        $(`#item${index}`).css("background-color", "#8000ff");
        $(`#item${index}`).css("color", "white");

        let num = Math.floor(Math.random() * 101);
        if (num < 26) {
            $(`#label${index}`).html(`Master Quest (1 AXS)`);
        } else {
            $(`#label${index}`).html(`Master Quest`);
        }
    } else if (result == "A") {
        $(`#item${index}`).css("background-color", "#35c2de");
        $(`#item${index}`).css("color", "black");
        $(`#label${index}`).html(`Advanced Quest`);
    } else if (result == "I") {
        $(`#item${index}`).css("background-color", "#00b21d");
        $(`#item${index}`).css("color", "black");
        $(`#label${index}`).html(`Intermediate Quest`);
    } else {        
        $(`#item${index}`).css("background-color", "white");
        $(`#item${index}`).css("color", "black");
        $(`#label${index}`).html(`Basic Quest`);
    }
}

function simulate() {
    let cost = 0;
    for (let i = 1; i <=5; i++) {        
        let result = "";
        if (i == 1) result = item1Result;
        else if (i == 2) result = item2Result;
        else if (i == 3) result = item3Result;
        else if (i == 4) result = item4Result;
        else if (i == 5) result = item5Result;

        for (let j = 1; j <=10; j++) {
            if (result == "M") {
                break;
            }
            
            if (j < 6) {
                cost += 10;
                result = rollBasic();                
            } else if (j < 9) {
                cost += 30;
                result = rollIntermediate();
            } else {
                cost += 100;
                result = rollAdvanced();
            }
            
            updateUI(i, j, result);            
        }
    }

    $(`#results`).html(`*A total of ${cost} Fortune Slips were used. (${new Date().toLocaleString()})`);
}

function reset() {
    defaultRoll();
    $(`#results`).html(``);
}

function rollBasic() {
    let num = Math.floor(Math.random() * 101);
    if (num < 61) {
        return "B";
    } else if (num < 86) {
        return "I";
    } else if (num < 99) {
        return "A";
    } else {
        return "M";
    }
}

function rollIntermediate() {
    let num = Math.floor(Math.random() * 101);
    if (num < 86) {
        return "I";
    } else if (num < 99) {
        return "A";
    } else {
        return "M";
    }
}

function rollAdvanced() {
    let num = Math.floor(Math.random() * 101);
    if (num < 99) {
        return "A";
    } else {
        return "M";
    }
}