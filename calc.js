function add()
         {
            let a=parseInt(document.getElementById("num1").value);
            let b=parseInt(document.getElementById("num2").value);
            let c=parseInt(a+b);
            document.getElementById("b1").innerHTML="addition of given value is "+c;
         }
 function sub()
         {
            let a=parseInt(document.getElementById("num1").value);
            let b=parseInt(document.getElementById("num2").value);
            let c=parseInt(a-b);
            document.getElementById("b2").innerHTML="subtraction of given value is "+c;
         }
function mul()
         {
            let a=parseInt(document.getElementById("num1").value);
            let b=parseInt(document.getElementById("num2").value);
            let c=parseInt(a*b);
            document.getElementById("b3").innerHTML="multiplication of given value is "+c;
         }
function div()
         {
            let a=parseInt(document.getElementById("num1").value);
            let b=parsedouble(document.getElementById("num2").value);
            let c=parsedouble(a/b);
            document.getElementById("b4").innerHTML="division of given value is "+c;
         }
function mod()
         {
            let a=parsedouble(document.getElementById("num1").value);
            let b=parsedouble(document.getElementById("num2").value);
            let c=parsedouble(a%b);
            document.getElementById("b5").innerHTML="modular  of given value is "+c;
         }