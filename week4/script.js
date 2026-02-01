function showResult() {
            let a = 5;
            let b = 6;
            let c = a + b;

            document.getElementById("result").innerHTML = "c = " + c;
        }

        function sumUser() {
           let a = Number(document.getElementById("num1").value);
           let b = Number(document.getElementById("num2").value);
            let c = a + b;

            document.getElementById("sum").innerHTML = c;
        }

        function subjResult() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let c = Number(document.getElementById("num3").value);
    let d = Number(document.getElementById("num4").value);
    let e = Number(document.getElementById("num5").value);
    let f = Number(document.getElementById("num6").value);
    let g = Number(document.getElementById("num7").value);
    let h = Number(document.getElementById("num8").value);

    let i = a + b + c + d + e + f + g + h;

    let result = "";

    if (i > 600) {
        result = "Excellent";
    } 
    else if (i > 400) {
        result = "Pass";
    } 
    else {
        result = "Fail";
    }
            document.getElementById("subj").innerHTML = "total marks: " + i  + "is "  + result;
        }