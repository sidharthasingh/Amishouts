function upvote(obj)
{
	xml=new XMLHttpRequest();
	id=new String(obj.id);
	id=id.substr(2,id.length-2);
	xml.onreadystatechange=function()
	{
		if(this.readyState==4 && this.status==200)
		{
			res=this.responseText;
			if(res=="1")
			{
				n=new Number(document.getElementById('ru'+id).innerHTML);
				n=n+1;
				document.getElementById('ru'+id).innerHTML=n;
				$("#au"+id).css("color","#55f");
				$("#ad"+id).css("color","#777");
			}
			else if(res=="2")
			{
				n=new Number(document.getElementById('ru'+id).innerHTML);
				n=n+1;
				document.getElementById('ru'+id).innerHTML=n;
				n=new Number(document.getElementById('rd'+id).innerHTML);
				n=n-1;
				document.getElementById('rd'+id).innerHTML=n;
				$("#au"+id).css("color","#55f");
				$("#ad"+id).css("color","#777");
			}
			else if(res=="3")
			{
				n=new Number(document.getElementById('ru'+id).innerHTML);
				n=n-1;
				document.getElementById('ru'+id).innerHTML=n;
				$("#au"+id).css("color","#777");
				$("#ad"+id).css("color","#777");
			}
		}
	}
	xml.open("GET","/php/shout.php?sid="+id+"&email="+getCookie("amishouts_user")+"&upvote=true",true);
	xml.send();
}

function downvote(obj)
{
	xml=new XMLHttpRequest();
	id=new String(obj.id);
	id=id.substr(2,id.length-2);
	xml.onreadystatechange=function()
	{
		if(this.readyState==4 && this.status==200)
		{
			res=this.responseText;
			if(res=="1")
			{
				n=new Number(document.getElementById('rd'+id).innerHTML);
				n=n+1;
				document.getElementById('rd'+id).innerHTML=n;
				$("#ad"+id).css("color","#55f");
				$("#au"+id).css("color","#777");
			}
			else if(res=="2")
			{
				n=new Number(document.getElementById('rd'+id).innerHTML);
				n=n+1;
				document.getElementById('rd'+id).innerHTML=n;
				n=new Number(document.getElementById('ru'+id).innerHTML);
				n=n-1;
				document.getElementById('ru'+id).innerHTML=n;
				$("#ad"+id).css("color","#55f");
				$("#au"+id).css("color","#777");
			}
			else if(res=="3")
			{
				n=new Number(document.getElementById('rd'+id).innerHTML);
				n=n-1;
				document.getElementById('rd'+id).innerHTML=n;
				$("#ad"+id).css("color","#777");
				$("#au"+id).css("color","#777");
			}
		}
	}
	xml.open("GET","/php/shout.php?sid="+id+"&email="+getCookie("amishouts_user")+"&downvote=true",true);
	xml.send();
}

function shout_print_short(text,sid,like,unlike,comment,liked)
{
	temp=
	'<div class="shout-short-container">\n\
				<div class="text-view">\n\
					<span class="shout-short-view">\n\
					'+text+'\n\
					</span>\n\
				</div>\n\
				<div class="rating">\n\
					<span>\n\
						<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>\n\
					</span>\n\
					<span id="ru'+sid+'">\n\
						'+like+'\n\
					</span>\n\
					<span>\n\
						<i class="fa fa-thumbs-o-down" aria-hidden="true"></i>\n\
					</span>\n\
					<span id="rd'+sid+'">\n\
						'+unlike+'\n\
					</span>\n\
					<span>\n\
						<i class="fa fa-comments-o" aria-hidden="true"></i>\n\
					</span>\n\
					<span id="rc'+sid+'"></span>\n\
						'+comment+'\n\
					</span>\n\
				</div>\n\
				<center><hr></center>\n\
				<div class="action-view">\n\
					<span class="item" id="au'+sid+'" onclick="upvote(this)"><i class="fa fa-thumbs-up" aria-hidden="true"></i>Like</span>\n\
					<span class="item" id="ad'+sid+'" onclick="downvote(this)"><i class="fa fa-thumbs-down" aria-hidden="true"></i>Unlike</span>\n\
					<span class="item" id="ac'+sid+'" onclick="comment_load(this)" href="comment.html"><i class="fa fa-comments" aria-hidden="true"></i>Comments</span>\n\
				</div>\n\
	</div>\n\
	';
	// document.getElementById("shout").innerHTML=temp+document.getElementById("shout").innerHTML;
	document.getElementById("shout").innerHTML+=temp;
	if(liked=="1")
	{
		$("#au"+sid).css("color","#55f");
	}
	else if(liked=="-1")
	{
		$("#ad"+sid).css("color","#55f");
	}
}
function shout_print_shortd(text,sid,like,unlike,comment,liked)
{
	temp=
	'<div class="shout-short-container">\n\
				<div class="text-view">\n\
					<span class="shout-short-view">\n\
					'+text+'\n\
					</span>\n\
				</div>\n\
				<div class="rating">\n\
					<span>\n\
						<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>\n\
					</span>\n\
					<span id="ru'+sid+'">\n\
						'+like+'\n\
					</span>\n\
					<span>\n\
						<i class="fa fa-thumbs-o-down" aria-hidden="true"></i>\n\
					</span>\n\
					<span id="rd'+sid+'">\n\
						'+unlike+'\n\
					</span>\n\
					<span>\n\
						<i class="fa fa-comments-o" aria-hidden="true"></i>\n\
					</span>\n\
					<span id="rc'+sid+'"></span>\n\
						'+comment+'\n\
					</span>\n\
				</div>\n\
				<center><hr></center>\n\
				<div class="action-view">\n\
					<span class="item" id="au'+sid+'" onclick="upvote(this)"><i class="fa fa-thumbs-up" aria-hidden="true"></i>Like</span>\n\
					<span class="item" id="ad'+sid+'" onclick="downvote(this)"><i class="fa fa-thumbs-down" aria-hidden="true"></i>Unlike</span>\n\
					<span class="item" id="ac'+sid+'" onclick="comment_load(this)" href="comment.html"><i class="fa fa-comments" aria-hidden="true"></i>Comments</span>\n\
					<span style="color:#F55;" class="item" id="de'+sid+'" onclick="delete_shout(this)"><i class="fa fa-times" aria-hidden="true"></i>Delete</span>\n\
				</div>\n\
	</div>\n\
	';
	// document.getElementById("shout").innerHTML=temp+document.getElementById("shout").innerHTML;
	document.getElementById("shout").innerHTML+=temp;
	if(liked=="1")
	{
		$("#au"+sid).css("color","#55f");
	}
	else if(liked=="-1")
	{
		$("#ad"+sid).css("color","#55f");
	}
}

function delete_shout(obj)
{
	xml=new XMLHttpRequest();
	id=new String(obj.id);
	id=id.substr(2,id.length-2);
	xml.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200)
		{
			res=this.responseText;
			if(res=="1")
			{
				$("#"+obj.id).parent().parent().animate({height:0},250);
				$("#"+obj.id).parent().parent().animate({padding:0},100);
				$("#"+obj.id).parent().parent().animate({margin:0},100);
				profile_count_post--;
			}
			if(profile_count_post==0)
			{
				initiate_nothing_to_show();
			}
		}
	}
	xml.open("GET","/php/shout.php?del=true&sid="+id+"&e="+getCookie("amishouts_user")+"&s="+getCookie("sess_ID"),true);
	xml.send();
}

function shout_print_shortb(text,sid,like,unlike,comment,liked)
{
	temp=
	'<div class="shout-short-container">\n\
				<div class="text-view">\n\
					<span class="shout-short-view">\n\
					'+text+'\n\
					</span>\n\
				</div>\n\
				<div class="rating">\n\
					<span>\n\
						<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>\n\
					</span>\n\
					<span id="ru'+sid+'">\n\
						'+like+'\n\
					</span>\n\
					<span>\n\
						<i class="fa fa-thumbs-o-down" aria-hidden="true"></i>\n\
					</span>\n\
					<span id="rd'+sid+'">\n\
						'+unlike+'\n\
					</span>\n\
					<span>\n\
						<i class="fa fa-comments-o" aria-hidden="true"></i>\n\
					</span>\n\
					<span id="rc'+sid+'"></span>\n\
						'+comment+'\n\
					</span>\n\
				</div>\n\
				<center><hr></center>\n\
				<div class="action-view">\n\
					<span class="item" id="au'+sid+'" onclick="upvote(this)"><i class="fa fa-thumbs-up" aria-hidden="true"></i>Like</span>\n\
					<span class="item" id="ad'+sid+'" onclick="downvote(this)"><i class="fa fa-thumbs-down" aria-hidden="true"></i>Unlike</span>\n\
					<span class="item" id="ac'+sid+'" onclick="comment_load(this)" href="comment.html"><i class="fa fa-comments" aria-hidden="true"></i>Comments</span>\n\
				</div>\n\
	</div>\n\
	';
	document.getElementById("shout").innerHTML+=temp;
	if(liked=="1")
	{
		$("#au"+sid).css("color","#55f");
	}
	else if(liked=="-1")
	{
		$("#ad"+sid).css("color","#55f");
	}
}

function load_shout_content()
{
	// window.onerror=function()
	// {
	// 	deleteAllCookie();
	// 	window.location="index.html";
	// }
	xml=new XMLHttpRequest();
	xml.onreadystatechange=function()
	{
		if(this.readyState==4 && this.status==200)
		{
			res=this.responseText;
			res=JSON.parse(res);
			for(i=0;i<res.data.length;i++)
			{
				shout_print_short(res.data[i].text,res.data[i].sid,res.data[i].like,res.data[i].unlike,res.data[i].comment,res.data[i].liked);
			}
		}
	}
	xml.open("GET","/php/shout.php?load=all&e="+getCookie("amishouts_user")+"&s="+getCookie("sess_ID"),true);
	xml.send();
}

function loadmore()
{
	wait=$("#wait1");
	$(".load_more").animate({opacity:"0"},500);
	$(".load_more").css("display","none");
	wait.css("display","block");
	wait.css("opacity","0");
	wait.animate({opacity:"1"},500);
	xml=new XMLHttpRequest();
	xml.onreadystatechange=function()
	{
		if(this.readyState==4 && this.status==200)
		{
			res=this.responseText;
			if(res=="" || res=="0")
			{
				alert("Oudated cookie. Try re-login.");
				deleteAllCookie();
			}
			else
			{
				try
				{
					res=JSON.parse(res);
					for(i=0;i<res.data.length;i++)
					{
						shout_print_shortb(res.data[i].text,res.data[i].sid,res.data[i].like,res.data[i].unlike,res.data[i].comment,res.data[i].liked);
					}
				}
				catch(e)
				{
					alert(e);
					wait.animate({opacity:"0"},500);
					wait.css("display","none");
					$(".load_more").css("display","block");
					$(".load_more").animate({opacity:"1"},500);
				}
			}
			wait.animate({opacity:"0"},500);
			wait.css("display","none");
			$(".load_more").css("display","block");
			$(".load_more").animate({opacity:"1"},500);
		}
	}
	xml.open("GET","/php/shout.php?load=tr&more=tr&e="+getCookie("amishouts_user")+"&s="+getCookie("sess_ID"),true);
	xml.send();
}

function comment_load(obj)
{
	s=new String(obj.id);
	setCookie("shout_ID",s.substr(2,s.length-2),1);
	redirect("comment.html");
}

function load_profile_content()
{
	xml=new XMLHttpRequest();
	xml.onreadystatechange=function()
	{
		if(this.readyState==4 && this.status==200)
		{
			res=this.responseText;
			res=JSON.parse(res);
			if(res.data.length==0)
				initiate_nothing_to_show();
			for(i=0;i<res.data.length;i++)
			{
				profile_count_post++;
				shout_print_shortd(res.data[i].text,res.data[i].sid,res.data[i].like,res.data[i].unlike,res.data[i].comment,res.data[i].liked);
			}
		}
	}
	xml.open("GET","/php/shout.php?pro=true&e="+getCookie("amishouts_user")+"&s="+getCookie("sess_ID"),true);
	xml.send();
}

function genp(p)
{
	str="";
	p=new String(p);
	for(i=0;i<p.length;i++)
	{
		str+=p.charAt(i);
		if(i==2 || i==5)
			str+='-';
	}
	return str;
}

function load_profile()
{
	xml=new XMLHttpRequest();
	xml.onreadystatechange=function()
	{
		if(this.readyState==4 && this.status==200)
		{
			res=this.responseText;
			if(res=="0")
				alert("cookie expired. Please re login");
			else if(res=="1")
				alert("profile not found");
			else if(res=="2")
				alert("error encountered");
			else if(res=="3")
				alert("some random error has occured");
			else
			{
				res=JSON.parse(res);
				$(".name").text(res.pro[0].n);
				$(".email").text(res.pro[0].e);
				$(".phone").text("+91 "+genp(res.pro[0].p));
			}
		}
	}
	xml.open("GET","/php/profile.php?pr=tr&load=tr&e="+getCookie("amishouts_user")+"&s="+getCookie("sess_ID"),true);
	xml.send();
}

function initiate_nothing_to_show()
{
	$("#nothing-to-show").css("display","block");
}