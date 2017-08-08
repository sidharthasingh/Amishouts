function setCookie(cname, cvalue, exdays) 
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

function getCookie(cname) 
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) 
    {
        var c = ca[i];
        while (c.charAt(0) == ' ') 
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) 
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname)
{
	if(getCookie(cname)=="")
		return false;
	return true;
}

function deleteCookie(cname)
{
    setCookie(cname,'0',-100);
}

function validateCookie(par)
{
    xml=new XMLHttpRequest();
    xml.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            res=this.responseText;
            str=new String(res);
            if(str.localeCompare("1")==0)
            {
                return 1;
            }
            else
            {
                deleteAllCookie();
                redirect("index.html");
                return 0;
            }
        }
    }
    xml.open("GET","/php/session.php?val=t&e="+getCookie("amishouts_user")+"&s="+getCookie("sess_ID"),true);
    xml.send();
}

function stopSession()
{
    xml=new XMLHttpRequest();
    xml.open("GET","/php/session.php?stop=tr&e="+getCookie("amishouts_user"),true);
    xml.send();
}

function logout()
{
    stopSession();
    deleteAllCookie();
    window.location="index.html";
}

function deleteAllCookie()
{
    deleteCookie("amishouts_user");
    deleteCookie("sess_ID");
    deleteCookie("onpage");
    deleteCookie("shout_ID");
}