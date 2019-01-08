var expressionArr = [];
var calculationArr = [];
var operators = ["+", "-", "*", "/"];
var numChange;

//adds user inputted number to expressionArr and displays
$(".number").on("click", function() {
    expressionArr.push($(this).val());
    $(".numbers-field").val(expressionArr.join(""));
});

//adds user inputted number to expressionArr and displays
$(".operation").on("click", function() {
    expressionArr.push($(this).val());
    $(".numbers-field").val(expressionArr.join(""));
});

//allows user to delete most recent entry and removes it from the expressionArr
$(".delete").on("click", function() {
    expressionArr.pop();
    $(".numbers-field").val(expressionArr.join(""));
});

//completely clears expressionArr
$(".clear").on("click", function() {
    expressionArr = [];
    $(".numbers-field").val(expressionArr.join(""));
});

//allows user to change sign of most recent input in expressionArr

$(".sign").on("click", function() {
    var num_to_change = expressionArr.pop();
    num_to_change *= -1;
    expressionArr.push(num_to_change.toString());
    $(".numbers-field").val(expressionArr.join(""));
});

//allows user to input decimal numbers

$(".decimal").on("click", function() {
    if (expressionArr.length === 0) {
        expressionArr.push("0.");
        $(".numbers-field").val(expressionArr);
    } else {
        var num_to_change = expressionArr.pop();
        num_to_change += "."
        expressionArr.push(num_to_change.toString());
        $(".numbers-field").val(expressionArr.join(""));
    }
});

//converts number entered to value divided by 100

$(".percent").on("click", function() {
    var num_to_change = expressionArr.pop();
    num_to_change = num_to_change/100;
    expressionArr.push(num_to_change.toString());
    $(".numbers-field").val(expressionArr.join(""));
})

//begins calculation of result

$(".enter").on("click", function() {

    //empties calculationArr so last calculation result is not displayed when user clicks "enter"
    calculationArr = [];

    //converts user input to parsable string

    do {
        numChange = false;
        for (var i = 0; i < expressionArr.length-1; i++) {
            if (typeof parseInt(expressionArr[i]) === "number" && operators.indexOf(expressionArr[i]) === -1 &&
                typeof parseInt(expressionArr[i+1]) === "number" && operators.indexOf(expressionArr[i+1]) === -1) {
                var start_index = i;
                var num_elements_to_remove = 2;
                var combined = expressionArr[i] + expressionArr[i+1];
                expressionArr.splice(start_index, num_elements_to_remove, combined);
                numChange = true;
            } 
        }
    }
    while(numChange);

    //parsing all elements into numbers except operators and returning a new array called calculationArr

    for (var i = 0; i < expressionArr.length; i++) {
        if (expressionArr[i] === "+" || expressionArr[i] === "-" || expressionArr[i] === "*" || expressionArr[i] === "/") {
            calculationArr.push(expressionArr[i]);
        } else {
            var parsed = parseFloat(expressionArr[i]);
            calculationArr.push(parsed);
        }
    }


    // calculates multiplication and division expressions in order from left to right
    while (calculationArr.includes("*") || calculationArr.includes("/")) {
        for (var i = 0; i < calculationArr.length; i++) {
            if (calculationArr[i] === "*") {
                var result = calculationArr[i-1] * calculationArr[i+1];
                var start_index = i-1;
                var num_elements_to_remove = 3;
                calculationArr.splice(start_index, num_elements_to_remove, result);
            } else if (calculationArr[i] === "/") {
                var result = calculationArr[i-1]/calculationArr[i+1];
                var start_index = i-1;
                var num_elements_to_remove = 3;
                calculationArr.splice(start_index, num_elements_to_remove, result);
            }
        }
    }

    //calculates addition and subtraction expressions in order from left to right
    while (calculationArr.includes("+") || calculationArr.includes("-")) {
        for (var i = 0; i < calculationArr.length; i++) {
            if (calculationArr[i] === "+") {
                var result = calculationArr[i-1] + calculationArr[i+1];
                var start_index = i-1;
                var num_elements_to_remove = 3;
                calculationArr.splice(start_index, num_elements_to_remove, result);
            } else if (calculationArr[i] === "-") {
                var result = calculationArr[i-1] - calculationArr[i+1];
                var start_index = i-1;
                var num_elements_to_remove = 3;
                calculationArr.splice(start_index, num_elements_to_remove, result);
            }
        }
    }
    

    //displays final result (first element of calculationArr)


    $(".numbers-field").val(calculationArr[0].toFixed(2));


   

});





