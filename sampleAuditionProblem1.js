function reset() {
    document.getElementById("formContents").reset();
    document.getElementById("even").style.display = "none";
    document.getElementById("odd").style.display = "none";
    document.getElementById("output1").style.display = "none";
    document.getElementById("output2").style.display = "none";
    return;
}

function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["userForm"].elements.length; 
        loopCounter++) {
        if (document.forms["userForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["userForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}

function validateItemsEven() {
    clearErrors();
    var num1 = document.forms["userForm"]["startingNumber"].value;
    var num2 = document.forms["userForm"]["endingNumber"].value;
    var num3 = document.forms["userForm"]["stepNumber"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Starting Number must be filled-in with a number.");
        return false;
    }
    if (num2 == "" || isNaN(num2)) {
       alert("Ending Number must be filled-in with a number.");
       document.forms["userForm"]["endingNumber"]
          .parentElement.className = "form-group has-error"
       document.forms["userForm"]["endingNumber"].focus();
       return false;
    }
    if (num3 == "" || isNaN(num3)) {
       alert("Step Number must be filled-in with a number.");
       document.forms["userForm"]["stepNumber"]
          .parentElement.className = "form-group has-error"
       document.forms["userForm"]["stepNumber"].focus();
       return false;
    }
    if (num3 <= 0) {
        alert("Step number must be greater than zero.")
        return false;
    }
    if (num2 <= num1) {
        alert("Ending Number must be greater than Starting Number.")
        return false;
    }
    else function evenNumbers(num1, num2, num3){    
        var output1 = [];    
        for (var i = num1; i < num2; i += num3){    
            if (i % 2 == 0){       
                output1.push(i);
            }
        }
        document.getElementById("output1").innerText = output1;  
    }
    document.getElementById("even").style.display = "block";
    document.getElementById("start").innerText = Number(num1);
    document.getElementById("end").innerText = Number(num2);
    document.getElementById("step").innerText = Number(num3);
    document.getElementById("output1").style.display = "block";
    return output1
}
/*
function validateItemsOdd() {
    clearErrors();
    var num1 = document.forms["userForm"]["startingNumber"].value;
    var num2 = document.forms["userForm"]["endingNumber"].value;
    var num3 = document.forms["userForm"]["stepNumber"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Starting Number must be filled in with a number.");
        return false;
    }
    if (num2 == "" || isNaN(num2)) {
       alert("Ending Number must be filled in with a number.");
       document.forms["userForm"]["endingNumber"]
          .parentElement.className = "form-group has-error"
       document.forms["userForm"]["endingNumber"].focus();
       return false;
    }
    if (num3 == "" || isNaN(num3)) {
       alert("Step Number must be filled in with a number.");
       document.forms["userForm"]["stepNumber"]
          .parentElement.className = "form-group has-error"
       document.forms["userForm"]["stepNumber"].focus();
       return false;
    }
    if (num3 <= 0) {
        alert("Step number must be greater than or equal to zero.")
        return false;
    }
    if (num2 <= num1) {
        alert("Ending Number must be greater than Starting Number.")
        return false;
    }
    else function oddNumbers(num1, num2, num3){    
        var output2 = [];    
        for (var i= num1; i < num2; i += num3){    
            if (i % 2 == 1){       
                output2.push(i);
                return output2;     
            }     
        }
    }
    document.getElementById("odd").style.display = "block";
    document.getElementsByClassName("startingNumber").innerText = num1;
    document.getElementsByClassName("endingNumber").innerText = num2;
    document.getElementsByClassName("stepNumber").innerText = num3;
    document.getElementById("output2").innerText = oddNumbers(output2);
} */