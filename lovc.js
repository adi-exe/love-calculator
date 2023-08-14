function myFunction()  {
    var n1 = prompt("whats your name buddy!","aditya dhanraj");
    var n2 = prompt("your crush? hnn :)", "you");
    var f1 = Math.random() * 101 ;
    f1 = Math.floor(f1);

    if (f1 > 70) {
        document.getElementById('log').innerHTML = "love percerntage between " + n1 + "and " + n2 + " is " + f1 + " %" + "<br> you are truely a lover";

    } else{
        document.getElementById('log').innerHTML = "love percerntage between " + n1 + "and " + n2 + " is " + f1 + " %" + "<br>dont act like you care" ;
    }
    
    //console.log("love percerntage between " + n1 + "and " + n2 + "is" + f1);
    //document.write(); 
    }
