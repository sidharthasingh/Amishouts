function redirect(location)
{
	s=new String(location);
	if(s.localeCompare("index.html")==0)
	{
		str=new String("AmiShouts.html");
		if(str.localeCompare(getCookie("onpage"))==0 && (checkCookie("amishouts_user") && checkCookie("sess_ID")))
		{

		}
		else if(checkCookie("amishouts_user") && checkCookie("sess_ID"))
		{
			window.location="index.html";
		}
		else 
		{
			deleteAllCookie();
			window.location="index.html";
		}
	}
	else if(s.localeCompare(getCookie("onpage"))!=0)
		window.location=location;
}

function goback()
{
	window.history.back();
}