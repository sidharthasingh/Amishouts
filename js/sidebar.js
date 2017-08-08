//FOR FULL SCREEN
/* Open the sidenav */
// function openNav() {
//     document.getElementById("sidenav").style.width = "100%";
// }

/* Close/hide the sidenav */
// function closeNav() {
//     document.getElementById("sidenav").style.width = "0";
//}

/*for just half*/
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

function retroBabe(mode)
{
	control=1;
	if(mode==true)
	{
		openNav();
	}
	else
	{
		closeNav();
		control=0;
	}
	navMode=!navMode;
}

function retroBebe()
{
	if(navMode==true && control==0)
	{
		closeNav();
		navMode=!navMode;
	}
	control=0;
}

function loadsideBar()
{
	document.getElementById("sidenav").innerHTML+='\
	<a href="#"></a>\
	<a href="#"></a>\
	<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> \
	<a href="javascript:redirect(\'index.html\')">Home</a>\
	<a href="javascript:redirect(\'profile.html\')">Profile</a>\
	<a href="javascript:redirect(\'amidate.html\')">Ami-Dating</a>\
	<a href="javascript:redirect(\'about.html\')">About</a>\
	<a href="javascript:redirect(\'invest.html\')">Invest with us</a>\
	<a href="javascript:redirect(\'contact.html\')">Contact Us</a>\
	<a href="javascript:logout();">Logout</a>';
}
control=0;
navMode=false;