function empty() {
    document.getElementById("formContents").reset();
    document.getElementById("even").style.display = "none";
    document.getElementById("odd").style.display = "none";
    document.getElementById("output").style.display = "none";
    document.getElementById("output1").style.display = "none";
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

function validateItems() {
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
}

function evenNumbers(num1, num2, num3){ 

    var num1 = parseInt(document.forms["userForm"]["startingNumber"].value);
    var num2 = parseInt(document.forms["userForm"]["endingNumber"].value);
    var num3 = parseInt(document.forms["userForm"]["stepNumber"].value); 
    console.log(num1, num2, num3, 'function start');

    var output = [];    
    console.log('loop from ' + num1 + ' to ' + num2 + ' by ' + num3);

        for (var i = num1; i < num2; i += num3){    
            if (i % 2 == 0){  
                console.log("pushing " + i);

                output.push(i);
            }
        }
        console.log('evenNumbers are:' + output.join());
        document.getElementById("output").innerText = output.join();  
        document.getElementById("even").style.display = "block";
        document.getElementById("start").innerText = Number(num1);
        document.getElementById("end").innerText = Number(num2);
        document.getElementById("step").innerText = Number(num3);
        document.getElementById("output").style.display = "block";
}

function oddNumbers(num1, num2, num3){ 

    var num1 = parseInt(document.forms["userForm"]["startingNumber"].value);
    var num2 = parseInt(document.forms["userForm"]["endingNumber"].value);
    var num3 = parseInt(document.forms["userForm"]["stepNumber"].value); 
    console.log(num1, num2, num3, 'function start');

    var output1 = [];    
    console.log('loop from ' + num1 + ' to ' + num2 + ' by ' + num3);

        for (var i = num1; i < num2; i += num3){    
            if (i % 2 == 1){  
                console.log("pushing " + i);

                output1.push(i);
            }
        }
        console.log('oddNumbers are:' + output1.join());
        document.getElementById("output1").innerText = output1.join();  
        document.getElementById("odd").style.display = "block";
        document.getElementsByClassName("startingNumber").innerText = Number(num1);
        document.getElementsByClassName("endingNumber").innerText = Number(num2);
        document.getElementsByClassName("stepNumber").innerText = Number(num3);
        document.getElementById("output1").style.display = "block";
}