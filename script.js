function compute()
{
  var principal = document.getElementById("principal").value;
  if(principal<=0)
  {
    alert("Enter positive number..")
    principal.focus();
    return false
  }

  var rate = document.getElementById("rate").value;
  var yrs = document.getElementById("years").value;
  var si = (principal*rate*yrs)/100;
  output=document.getElementById("result");
  var yyyy = 2021+Number(yrs);
  output.innerHTML="<br><br>"+"If you deposit <mark>"+principal+"</mark><br>"+"at an interest rate of <mark>"+rate+"</mark><br>"+"You will receive an amount of <mark>"+si+"</mark><br>"+"in the year <mark>"+yyyy+"</mark>"
  
  return true
}

function slide()
{
  var rate = document.getElementById("rate").value;
  document.getElementById("rate1").innerHTML=rate;
}
