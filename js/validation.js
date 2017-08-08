function isempty(value)
{			
	if(value=="")
	{
		return true;
	}
	return false;
}

function get(id)
{
	return document.getElementById(id).value;
}

function empty_check(fname,lname,email,phone,pass,cpass)
{
	fillerr="";
	if(isempty(fname))
	{
		fillerr+="first name, ";
	}
	if(isempty(lname))
	{
		fillerr+="last name, ";
	}
	if(isempty(email))
	{
		fillerr+="email, ";
	}
	if(isempty(phone))
	{
		fillerr+="phone number, ";
	}
	if(isempty(pass))
	{
		fillerr+="password, ";
	}
	if(isempty(cpass))
	{
		fillerr+="confirm password, ";
	}
	if(fillerr!="")
	{
		fillerr="The following fields are empty : "+fillerr;
		alert(fillerr);
		return false;
	}
	return true;
}

function phone_check(phone)
{
	var str=new String(phone);
	if(str.length!=10)
	{
		alert("Invalid phone number. A proper phone number is of 10 digits.");
		return false;
	}
	for(i=0;i<10;i++)
	{
		if(str.charAt(i)<'0' || str.charAt(i)>'9')
		{
			alert("A phone number can only contain digits.")
			return false;
		}
	}
	return true;
}

function email_check(email)
{
	var str=new String(email);
	for(i=0;i<str.length;i++)
	{
		if(str.charAt(i)=='@')
		{
			if(i>0)
			{
				count=0;
				for(j=i;j<str.length;j++)
				{
					if(str.charAt(j)=='.' && j<str.length-1)
					{
						count++;
					}
					else if(str.charAt(j)=='.' && j==str.length-1)
					{
						alert("Invalid email address.");
						return false;
					}
				}
				if(count==1)
				{
					return true;
				}
				else
				{
					alert("Invalid email address.");
					return false;
				}
			}
			else
			{
				alert("Invalid email address.");
				return false;
			}
		}
	}
	alert("Invalid email address");
	return false;
}
function con_pass(pass,cpass)
{
	str=new String(pass);
	str1=new String(cpass);
	if(str.indexOf(str1)==0 && str.length==str1.length)
		return true;
	else
	{
		alert("Passwords do not match.");
		return false;
	}
}
function login_all_ok()
{
	email=get("login_username");
	pass=get("login_password");
	if(!empty_check('a','a',email,'a',pass,'a'))
		return false;
	if(!email_check(email))
		return false;
	else
	{
		try
		{
			$("#wait").css("display","block");
			var xml=new XMLHttpRequest();
			xml.onreadystatechange = function(){
				if(this.readyState==4 && this.status==200){
					var response=this.responseText;
					if(response=="0")
					{
						alert("INTERNAL ERROR OR Email or password do not match");
					}
					else
					{
						try
						{
							response=JSON.parse(response);
							setCookie("amishouts_user",email,1)
							setCookie("sess_ID",response.d[0].s,1);
							location.reload(true);
						}
						catch(e)
						{
							$("#wait").css("display","none");
							alert("Some error occured");
						}
					}
					$("#wait").css("display","none");
				}
			}
			xml.open("GET","php/login.php?username="+email+"&password="+pass,true);
			xml.send();
		}
		catch(e)
		{
			$("#wait").css("display","none");
			alert("Some error occured");
		}
	}
	return false;
}

function convert_to_number(ph)
{
	str=new String(ph);
	num=0;
	for(i=0;i<ph.length;i++)
	{
		num+=ph.charAt(i);
	}
	return damon_var;
}

function signup_all_ok(par)
{
	if(par==1)
	{
		ph=$("#phone_no").val();
		dm=convert_to_number(ph);
		ps=$("#signup_pass").val();
		cp=$("#signup_cpass").val();
		if(!empty_check("a","a","a",ph,ps,cp))
			return false;
		if(!phone_check(ph))
			return false;
		if(!con_pass(ps,cp))
			return false;
		$("#wait").css("display","block");
		xml=new XMLHttpRequest();
		xml.onreadystatechange=function()
		{
			if(this.readyState==4 && this.status==200)
			{
				res=this.responseText;
				if(res!="1" && res!="0" && res!="3")
				{
					setCookie("amishouts_user",res,1);
					location.reload(true);
				}
				else if(res=="3")
				{
					alert("Phone number already in use.");
				}
				else if(res=="1" || res=="0")
				{
					alert("Something went wrong. Please try again.");
				}
				$("#wait").css("display","none");
			}
		}
		xml.open("GET","/php/registration.php?ph="+ph+"&ps="+ps+"&tok="+dm,true);
		xml.send();
	}
	else if(par==0)
	{
		fn=$("#sufname").val();
		ln=$("#sulname").val();
		em=$("#suemail").val();
		ph=$("#suphone").val();
		ps=$("#su_pass").val();
		cp=$("#su_cpass").val();
		if(!empty_check(fn,ln,em,ph,ps,cp))
			return false;
		if(!email_check(em))
			return false;
		if(!phone_check(ph))
			return false;
		if(!con_pass(cp,ps))
			return false;
		$("#wait").css("display","block");
		xml=new XMLHttpRequest();
		xml.onreadystatechange=function()
		{
			if(this.readyState==4 && this.status==200)
			{
				$("#wait").css("display","none");
				res=this.responseText;
				if(res=="0")
				{
					alert("user already exists.");
				}
				else if(res=="1")
				{
					gobacktosignin();
					alert("a confirmation mail has been sent to "+em);
				}
				else if(res=="3")
				{
					alert("phone number already exists");
				}
				else
				{
					alert("Something went wrong. Plz try again.");
				}
			}
		}
		xml.open("GET","/php/registration.php?ph="+ph+"&ps="+ps+"&em="+em+"&fn="+fn+"&ln="+ln,true);
		xml.send();
	}
	return false;
}

function forgot_all_ok()
{
	email=get("email");
	if(!empty_check('a','a',email,'a','a','a'))
		return false;
	if(!email_check(email))
		return false;
	return true;
}