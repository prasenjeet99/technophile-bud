function ValidateEmail(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{

return true;
}
else
{
alert("You have entered an invalid email address!");
document.email.focus();
return false;
}
}
