
function diceToggle() {
    $("#diceRoller").toggle();
}

function notesToggle() {
    $("#notesPage").toggle();
}
function spellsToggle(){
    $("#spells").toggle();
}

function clear() {

}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function addDiceHistory(die, number, roll) {
    var sum = parseInt(number) + parseInt(roll);
    if(roll == 20){
        var row = "You rolled a D" + die + "(" + roll + ") plus " + number + " and got a " + sum + " CRITICAL!\n";
    }
    else if (roll == 1) {
        var row = "You rolled a D" + die + "(" + roll + ") plus " + number + " and got a " + sum + " CRITICAL FAIL!\n";
    }
    else
    var row = "You rolled a D" + die + "("+roll+") plus "+number+" and got a " + sum + "\n";
    console.log(row);
    $("#hisstory").val($("#hisstory").val()+row);
}

function rollD2() {
    var roll = Math.floor((Math.random() * 2) + 1)
    var add = parseInt($("#numPadText").val());
    if(isNaN(add)){
        add = 0;
    }
    confirm(roll + add);
    addDiceHistory(2,add,roll);
}

function rollD4() {
    var roll = Math.floor((Math.random() * 4) + 1)
    var add = parseInt($("#numPadText").val());
    if (isNaN(add)) {
        add = 0;
    }
    confirm(roll + add);
    addDiceHistory(4,add,roll);
}

function rollD6() {
    var roll = Math.floor((Math.random() * 6) + 1)
    var add = parseInt($("#numPadText").val());
    if (isNaN(add)) {
        add = 0;
    }
    confirm(roll + add);
    addDiceHistory(6,add,roll);
}

function rollD8() {
    var roll = Math.floor((Math.random() * 8) + 1)
    var add = parseInt($("#numPadText").val());
    if (isNaN(add)) {
        add = 0;
    }
    confirm(roll + add);
    addDiceHistory(8,add,roll);
}

function rollD10() {
    var roll = Math.floor((Math.random() * 10) + 1)
    var add = parseInt($("#numPadText").val());
    if (isNaN(add)) {
        add = 0;
    }
    confirm(roll + add);
    addDiceHistory(10,add,roll);
}

function rollD12() {
    var roll = Math.floor((Math.random() * 12) + 1)
    var add = parseInt($("#numPadText").val());
    if (isNaN(add)) {
        add = 0;
    }
    confirm(roll + add);
    addDiceHistory(12,add,roll);
}

function rollD20() {
    var roll = Math.floor((Math.random() * 20) + 1)
    var add = parseInt($("#numPadText").val());
    if (isNaN(add)) {
        add = 0;
    }
    if(roll == 20){
        confirm("CRITICAL! " + (roll + add))
    }
    else if (roll == 1) {
        confirm("CRITICAL FAIL! " + (roll + add))
    }
    else
    confirm(roll + add);
    addDiceHistory(20,add,roll);
}

function diceCalcType(number){
    $("#numPadText").val($("#numPadText").val() + number);
    clear0();
}

function diceCalcSub() {
    $("#numPadText").val($("#numPadText").val() * -1);
    clear0();
}

function backspace() {
    $("#numPadText").val(Math.floor(parseInt($("#numPadText").val() / 10)));


}

function clear0() {
    $("#numPadText").val(($("#numPadText").val() * 10) / 10);
}

function diceSaver() {
}
    

function calcSpellRange() {
    var base = parseInt( $("#spellBaseRange").val());
    var charlevel = $("#spellCharLevel").val();
    if(charlevel == 1){
        charlevel = 2;
    }
    var extra = $("#spellRangePLevel").val() * Math.floor(charlevel / 2);
    var sum = parseInt( base + extra);
    $("#spellRangeTotal").val(sum);
}

function calcSpellLevel() {
    var spellLevel = $("#spellLevel option:selected").val();
    document.getElementById("spellSaveThrowSpellLevel").innerHTML = spellLevel;
}

function NoteTabChange() {
    var notesTab = $("#noteTab").val();
    var tabName = "Page" + notesTab + "Button";
    var newName = $("#noteTabName").val();
    console.log(newName);
    document.getElementById(tabName).innerHTML = newName;
}