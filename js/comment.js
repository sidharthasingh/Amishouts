function upvote(obj)
{
	xml=new XMLHttpRequest();
	xml.onreadystatechange=function()
	{
		if(this.readyState==4 && this.status==200)
		{
			res=this.responseText;
			if(res=="1")
			{
				n=new Number(document.getElementById('z'+obj.id).innerHTML);
				n=n+1;
				document.getElementById('z'+obj.id).innerHTML=n;
			}
		}
	}
	xml.open("GET","/php/comment.php?sid="+getCookie("shout_ID")+"&cid="+obj.id+"&cid="+obj.id+"&email="+getCookie("amishouts_user")+"&upvote=true",true);
	xml.send();
}

function downvote(obj)
{
	xml=new XMLHttpRequest();
	xml.onreadystatechange=function()
	{
		if(this.readyState==4 && this.status==200)
		{
			res=this.responseText;
			if(res=="1")
			{
				n=new Number(document.getElementById('z'+obj.id).innerHTML);
				n=n-1;
				document.getElementById('z'+obj.id).innerHTML=n;
			}
		}
	}
	xml.open("GET","/php/comment.php?sid="+getCookie("shout_ID")+"&cid="+obj.id+"&email="+getCookie("amishouts_user")+"&downvote=true",true);
	xml.send();
}

function comment_print(text,rating,cid)
{
	str=document.getElementById("content").innerHTML;
	document.getElementById("content").innerHTML=
	'\
	<div class="comment-short-container">\n\
				<span class="comment-short-view" href="comment.html" id="'+cid+'">\n\
				'+
					text+
				'\n\
				</span>\n\
				<span class="rating">\n\
					<div id="'+cid+'" onclick="upvote(this)">\n\
						<i class="fa fa-chevron-up" aria-hidden="true"></i>\n\
					</div>\n\
					<div id="z'+cid+'">\n\
					'+
						rating+
					'\n\
					</div>\n\
					<div id="'+cid+'" onclick="downvote(this)">\n\
						<i class="fa fa-chevron-down" aria-hidden="true"></i>\n\
					</div>\n\
				</span>\n\
			</div>\n\
			'+str;
}
function load_comment_content()
{
	xml=new XMLHttpRequest();
	xml.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200)
		{
			res=this.responseText;
			// alert(res);
			res=JSON.parse(res);
			for(i=0;i<res.data.length;i++)
			{
				comment_print(res.data[i].text,res.data[i].value,res.data[i].cid);
			}
		}
	}
	xml.open("GET","/php/comment.php?sid="+getCookie("shout_ID"),true);
	xml.send();
}
function send_comment()
{
	str=document.getElementById("comment_input").value;
	var xml=new XMLHttpRequest();
	xml.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200)
		{
				res=this.responseText;
				if(res!='0')
				{
					comment_print(str,0,res);
					document.getElementById("comment_input").value="";
				}
		}
	}
	xml.open("GET","/php/comment.php?sid="+getCookie("shout_ID")+"&uid="+getCookie("amishouts_user")+"&text="+str,true);
	xml.send();
	return false;
}