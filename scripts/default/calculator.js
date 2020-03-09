/* 計算機 ========================================= */
function getNum(num) {
    $("#showResBox").val(function (i, val) {
        return val + num
    });
}
//C btn
function clearRes() {
    $("#showResBox").val("");
}

//equal btn
function equal() {
    var boxRes = $("#showResBox").val();
    var lastSym = boxRes.substr(boxRes.length - 1); //get the last value of the string

    //the last value of a maths formula should not be +-*/.
    if (lastSym == "+" || lastSym == "-" || lastSym == "*" || lastSym == "/" || lastSym == ".") {
        alertify.alert("Incomplete formula. Please check.");
    } else {
        $("#showResBox").val(eval($("#showResBox").val()));
    }
}

//+ * / . btn
function cal(calSymbol) {

    var boxRes = $("#showResBox").val();
    var lastSym = boxRes.substr(boxRes.length - 1); //get the last value of the string

    //need to press a number first before pressing +-*/.
    if ($("#showResBox").val() == "") {
        $("#showResBox").val("");
        //avoid duplicating the symbol +-*/. together    
    } else if (lastSym == "+" || lastSym == "-" || lastSym == "*" || lastSym == "/" || lastSym == ".") {
        $("#showResBox").val();
    } else {
        $("#showResBox").val(function (i, val) {
            return val + calSymbol
        });
    }
}

//- btn  can use in a substraction function or put before a number to make it as a negative number, so separate it from cal()
function minus(minuss) {

    var boxRes = $("#showResBox").val();
    var lastSym = boxRes.substr(boxRes.length - 1); //get the last value of the string
    //avoid duplicating the symbol +-*/. together 
    if (lastSym == "+" || lastSym == "-" || lastSym == "*" || lastSym == "/" || lastSym == ".") {
        $("#showResBox").val();
    } else {
        $("#showResBox").val(function (i, val) {
            return val + minuss
        });
    }
}

//del btn
function del() {
    $("#showResBox").val(function (i, val) {
        return val.substr(0, val.length - 1) //get the first to the second last value of the string
    });
}
