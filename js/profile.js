function changeps()
{
	$(".changep #text").css("display","none");
	$(".changep #form").css("display","block");
	$(".changep #form input[type='password']").animate({height:'25px'},500);
	$(".changep #form input[type='button']").animate({height:'40px'},500);
}

function con_pass(pass,cpass)
{
	str=new String(pass);
	str1=new String(cpass);
	if(str.indexOf(str1)==0 && str.length==str1.length)
		return true;
	else
	{
		alert("New Password does not match.");
		return false;
	}
}

function isempty(value)
{			
	if(value=="")
	{
		return true;
	}
	return false;
}

function changeps_sub()
{
	cp=$("#currp").val();
	np=$("#newp").val();
	cnp=$("#cnewp").val();
	if(!isempty(cp) && !isempty(np) && !isempty(cnp))
	{
		if(con_pass(np,cnp))
		{
			xml=new XMLHttpRequest();
			xml.onreadystatechange=function(){
				if(this.readyState==4 && this.status==200)
				{
					res=this.responseText;
					if(res=="1")
					{
						$("#currp").val("");
						$("#newp").val("");
						$("#cnewp").val("");
						$(".changep #text").css("display","block");
						$(".changep #form").animate({height:"0px"},500);
						// $(".changep #form").css("display","none");
						// alert("Password changed");
					}
					else if(res=="0")
					{
						alert("Session expired.");
					}
					else if(res=="2")
					{
						alert("Wrong password.");
					}
					else 
					{
						alert("Some error occured. Please retry.");
					}
				}
			}
			xml.open("GET","/php/profile.php?chnp=t&cp="+cp+"&e="+getCookie("amishouts_user")+"&s="+getCookie("sess_ID")+"&np="+np,true);
			xml.send();
		}
	}
	else
	{
		alert("Field Empty");
	}
}