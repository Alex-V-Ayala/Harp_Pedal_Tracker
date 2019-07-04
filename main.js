//////////Setting up clicking functionality for every pedal position//////////
function setDFlat() {
    $("#dFlat").addClass("selected");
    $("#dNat").removeClass("selected");
    $("#dSharp").removeClass("selected");
    $("#dDisplay").html("<p>D &#9837 / C &#9839</p>")
};
function setDNat() {
    $("#dFlat").removeClass("selected");
    $("#dNat").addClass("selected");
    $("#dSharp").removeClass("selected");
    $("#dDisplay").html("<p>D</p>")
};
function setDSharp() {
    $("#dFlat").removeClass("selected");
    $("#dNat").removeClass("selected");
    $("#dSharp").addClass("selected");
    $("#dDisplay").html("<p>D &#9839 / E &#9837</p>")
};
function setCFlat() {
    $("#cFlat").addClass("selected");
    $("#cNat").removeClass("selected");
    $("#cSharp").removeClass("selected");
    $("#cDisplay").html("<p>C &#9837 / B</p>")
};
function setCNat() {
    $("#cFlat").removeClass("selected");
    $("#cNat").addClass("selected");
    $("#cSharp").removeClass("selected");
    $("#cDisplay").html("<p>C / B&#9839</p>")
};
function setCSharp() {
    $("#cFlat").removeClass("selected");
    $("#cNat").removeClass("selected");
    $("#cSharp").addClass("selected");
    $("#cDisplay").html("<p>C &#9839 / D &#9837</p>")
};
function setBFlat() {
    $("#bFlat").addClass("selected");
    $("#bNat").removeClass("selected");
    $("#bSharp").removeClass("selected");
    $("#bDisplay").html("<p>B &#9837 / A &#9839</p>")
};
function setBNat() {
    $("#bFlat").removeClass("selected");
    $("#bNat").addClass("selected");
    $("#bSharp").removeClass("selected");
    $("#bDisplay").html("<p>B / C &#9837</p>")
};
function setBSharp() {
    $("#bFlat").removeClass("selected");
    $("#bNat").removeClass("selected");
    $("#bSharp").addClass("selected");
    $("#bDisplay").html("<p>B &#9839 / C</p>")
};
function setEFlat() {
    $("#eFlat").addClass("selected");
    $("#eNat").removeClass("selected");
    $("#eSharp").removeClass("selected");
    $("#eDisplay").html("<p>E &#9837 / D &#9839</p>")
};
function setENat() {
    $("#eFlat").removeClass("selected");
    $("#eNat").addClass("selected");
    $("#eSharp").removeClass("selected");
    $("#eDisplay").html("<p>E / F &#9837</p>")
};
function setESharp() {
    $("#eFlat").removeClass("selected");
    $("#eNat").removeClass("selected");
    $("#eSharp").addClass("selected");
    $("#eDisplay").html("<p>E &#9839 / F</p>")
};
function setFFlat() {
    $("#fFlat").addClass("selected");
    $("#fNat").removeClass("selected");
    $("#fSharp").removeClass("selected");
    $("#fDisplay").html("<p>F &#9837 / E</p>")
};
function setFNat() {
    $("#fFlat").removeClass("selected");
    $("#fNat").addClass("selected");
    $("#fSharp").removeClass("selected");
    $("#fDisplay").html("<p>F / E &#9839</p>")
};
function setFSharp() {
    $("#fFlat").removeClass("selected");
    $("#fNat").removeClass("selected");
    $("#fSharp").addClass("selected");
    $("#fDisplay").html("<p>F &#9839 / G &#9837</p>")
};
function setGFlat() {
    $("#gFlat").addClass("selected");
    $("#gNat").removeClass("selected");
    $("#gSharp").removeClass("selected");
    $("#gDisplay").html("<p>G &#9837 / F &#9839</p>")
};
function setGNat() {
    $("#gFlat").removeClass("selected");
    $("#gNat").addClass("selected");
    $("#gSharp").removeClass("selected");
    $("#gDisplay").html("<p>G</p>")
};
function setGSharp() {
    $("#gFlat").removeClass("selected");
    $("#gNat").removeClass("selected");
    $("#gSharp").addClass("selected");
    $("#gDisplay").html("<p>G &#9839 / A &#9837</p>")
};
function setAFlat() {
    $("#aFlat").addClass("selected");
    $("#aNat").removeClass("selected");
    $("#aSharp").removeClass("selected");
    $("#aDisplay").html("<p>A &#9837 / G &#9839</p>")
};
function setANat() {
    $("#aFlat").removeClass("selected");
    $("#aNat").addClass("selected");
    $("#aSharp").removeClass("selected");
    $("#aDisplay").html("<p>A</p>")
};
function setASharp() {
    $("#aFlat").removeClass("selected");
    $("#aNat").removeClass("selected");
    $("#aSharp").addClass("selected");
    $("#aDisplay").html("<p>A &#9839 / B &#9837</p>")
};

//////////Setting the Pedals////////// 
$("#dFlat").click(function(){
    setDFlat()
});
$("#dNat").click(function(){
    setDNat()
});
$("#dSharp").click(function(){
    setDSharp()
});
$("#cFlat").click(function(){
    setCFlat()
});
$("#cNat").click(function(){
    setCNat()
});
$("#cSharp").click(function(){
    setCSharp()
});
$("#bFlat").click(function(){
    setBFlat()
});
$("#bNat").click(function(){
    setBNat()
});
$("#bSharp").click(function(){
    setBSharp()
});
$("#eFlat").click(function(){
    setEFlat()
});
$("#eNat").click(function(){
    setENat()
});
$("#eSharp").click(function(){
    setESharp()
});
$("#fFlat").click(function(){
    setFFlat()
});
$("#fNat").click(function(){
    setFNat()
});
$("#fSharp").click(function(){
    setFSharp()
});
$("#gFlat").click(function(){
    setGFlat()
});
$("#gNat").click(function(){
    setGNat()
});
$("#gSharp").click(function(){
    setGSharp()
});
$("#aFlat").click(function(){
    setAFlat()
});
$("#aNat").click(function(){
    setANat()
});
$("#aSharp").click(function(){
    setASharp()
});

//////////SETTING THE KEY SIGNATURE//////////
$("#submitKey").on("click", function(){
    if ($("#keySig").val() === "cbMaj") {
        setDFlat();
        setCFlat();
        setBFlat();
        setEFlat();
        setFFlat();
        setGFlat();
        setAFlat()
    };
    if ($("#keySig").val() === "cMaj") {
        setDNat();
        setCNat();
        setBNat();
        setENat();
        setFNat();
        setGNat();
        setANat()
    };
    if ($("#keySig").val() === "c#Maj") {
        setDSharp();
        setCSharp();
        setBSharp();
        setESharp();
        setFSharp();
        setGSharp();
        setASharp()
    };
    if ($("#keySig").val() === "dbMaj") {
        setDFlat();
        setCNat();
        setBFlat();
        setEFlat();
        setFNat();
        setGFlat();
        setAFlat()
    };
    if ($("#keySig").val() === "dMaj") {
        setDNat();
        setCSharp();
        setBNat();
        setENat();
        setFSharp();
        setGNat();
        setANat()
    };
    if ($("#keySig").val() === "ebMaj") {
        setDNat();
        setCNat();
        setBFlat();
        setEFlat();
        setFNat();
        setGNat();
        setAFlat()
    };
    if ($("#keySig").val() === "eMaj") {
        setDSharp();
        setCSharp();
        setBNat();
        setENat();
        setFSharp();
        setGSharp();
        setANat()
    };
    if ($("#keySig").val() === "fMaj") {
        setDNat();
        setCNat();
        setBFlat();
        setENat();
        setFNat();
        setGNat();
        setANat()
    };
    if ($("#keySig").val() === "f#Maj") {
        setDSharp();
        setCSharp();
        setBNat();
        setESharp();
        setFSharp();
        setGSharp();
        setASharp()
    };
    if ($("#keySig").val() === "gbMaj") {
        setDFlat();
        setCFlat();
        setBFlat();
        setEFlat();
        setFNat();
        setGFlat();
        setAFlat()
    };
    if ($("#keySig").val() === "gMaj") {
        setDNat();
        setCNat();
        setBNat();
        setENat();
        setFSharp();
        setGNat();
        setANat()
    };
    if ($("#keySig").val() === "abMaj") {
        setDFlat();
        setCNat();
        setBFlat();
        setEFlat();
        setFNat();
        setGNat();
        setAFlat()
    };
    if ($("#keySig").val() === "aMaj") {
        setDNat();
        setCSharp();
        setBNat();
        setENat();
        setFSharp();
        setGSharp();
        setANat()
    };
    if ($("#keySig").val() === "bbMaj") {
        setDNat();
        setCNat();
        setBFlat();
        setEFlat();
        setFNat();
        setGNat();
        setANat()
    };
    if ($("#keySig").val() === "bMaj") {
        setDSharp();
        setCSharp();
        setBNat();
        setENat();
        setFSharp();
        setGSharp();
        setASharp()
    }
})