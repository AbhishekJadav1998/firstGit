
function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var fname = document.registration.fname;
var lname = document.registration.lname;
var uadd1 = document.registration.address1;
var uadd2 = document.registration.address2;
var ucity = document.registration.city;
var ustate = document.registration.state;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
if(userid_validation(uid,7))
{
if(passid_validation(passid,7))
{
if(allLetter(fname,"firstname"))
{
if(allLetter(lname,"lastname"))
{
if(ValidateEmail(uemail))
{
if(alphanumeric(uadd1,"addr. line 1"))
{

if(allLetter(ucity,"city"))

{

if(allLetter(ustate,"state"))

{

if(countryselect(ucountry))
{
if(allnumeric(uzip,"zip code"))
{
}
}

}
}


}
}
}
}
}
}
return false;

}
function userid_validation(uid,mx)
{
var uid_len = uid.value.length;
if (uid_len == 0 )
{
alert("User Id should not be empty ");
uid.focus();
return false;
}
if ( uid_len < mx)
{
alert("User Id length should be min "+mx);
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx)
{
var passid_len = passid.value.length;
if (passid_len == 0 )
{
alert("Password should not be empty " );
passid.focus();
return false;
}
if (passid_len < mx)
{
alert("Password length should be min. "+mx );
passid.focus();
return false;
}
return true;
}
function allLetter(str1,str)
{
var letters = /^[A-Za-z]+$/;
var len = str1.value.length;
if (len == 0 )
{
alert(str + " should not be empty " );
str1.value.focus();
return false;
}
if(str1.value.match(letters))
{
return true;
}
else
{
alert(str + ' must have alphabet characters only');
str1.value.focus();
return false;
}
}
function alphanumeric(uadd,str)
{
var len = uadd.value.length;


if (len == 0 )
{
alert(str + " should not be empty " );
uadd.focus();
return false;
}
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
function allnumeric(uzip,str)
{
var len = uzip.value.length;
if (len == 0 )
{
alert(str + " should not be empty " );
uzip.focus();
return false;
}
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert(str+' must have numeric characters only');
uzip.focus();
return false;
}
}
function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}
function ValidateEmail(uemail)
{
var len = uemail.value.length;
if (len == 0 )
{
alert( " email should not be empty " );
uzip.focus();
return false;
}
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;

}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}