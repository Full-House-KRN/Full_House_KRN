// Below function Executes on click of login button.
function validate(){
    var password = document.getElementById("Number").value;
    if (password == "123"){
        window.location.href = "https://suhasbrao.github.io/";
       return false;// Redirecting to other page.
    }
    else{
    alert("Wrong password please try again;");
    return false;
    }
}
