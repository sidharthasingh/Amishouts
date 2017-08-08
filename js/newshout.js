function process(str)
{
	s=new String(str);
	sf="";
	for(i=0;i<s.length;i++)
		if(s.charAt(i)!='+')
			sf+=s.charAt(i);
	return sf;
}

function shout_print_shortf(text,sid,like,unlike,comment,liked)
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
	document.getElementById("shout").innerHTML=temp+document.getElementById("shout").innerHTML;
	// document.getElementById("shout").innerHTML+=temp;
	if(liked=="1")
	{
		$("#au"+sid).css("color","#55f");
	}
	else if(liked=="-1")
	{
		$("#ad"+sid).css("color","#55f");
	}
}


function newShout(par)
{
	var str=process(document.getElementById("shoutarea").value);
	document.getElementById("shoutarea").value=str;
	var s=new String(str);
	if(s.length<5)
		alert("Minimum length : 5 characters");
	else if(s.length>500)
		alert("Minimum length : 500 characters");
	else 
	{
		var x=new XMLHttpRequest();
		x.onreadystatechange=function()
		{
			if(this.readyState==4 && this.status==200)
			{
				var response=this.responseText;
				if(response=="0" || response=="")
				{
					alert("Something went wrong! Please try again.");
				}
				else
				{
					document.getElementById("shoutarea").value="";
					if(par==0)
						goback();
					else
					{
						shout_print_shortf(str,response,0,0,0,0);
					}
				}
			}
		}
		x.open("GET","/php/newshout.php?e="+getCookie("amishouts_user")+"&t="+document.getElementById("shoutarea").value+"&s="+getCookie("sess_ID"),true);
		x.send();
	}
}