
const CelsiusE1 = document.getElementById("Celsius");
const FahrenheitE1 = document.getElementById("Fahrenheit");
const KelvinE1 = document.getElementById("Kelvin");
function computeTemp()
{
    console.log(event.target.value);
    const currentValue= +event.target.value;
        switch(event.target.name)
    {
        case "Celsius" :
        {
        KelvinE1.value= currentValue+273.15;
        FahrenheitE1.value=currentValue*9/5+32;
        break;
        }
        case "Fahrenheit":
        {
        CelsiusE1=(currentValue-32)*5/9;
        KelvinE1=(currentValue-32)*5/9+273.15;
        break;
        }
        case "Kelvin":
        {
        CelsiusE1=currentValue-273.15;
        FahrenheitE1=(currentValue-273.15)*9/5+32;
        break;
        }
        default:
            {
            console.log("Invalid temperature");
            }
    }

}
document.getElementById("Celsius").addEventListener("input",computeTemp);
document.getElementById("Fahrenheit").addEventListener("input",computeTemp);
document.getElementById("Kelvin").addEventListener("input",computeTemp);
function resetfields()
{
    document.getElementById("Celsius").value="";
    document.getElementById("Fahrenheit").value="";
    document.getElementById("Kelvin").value="";

}
document.getElementById("reset-btn").addEventListener("click",resetfields);
