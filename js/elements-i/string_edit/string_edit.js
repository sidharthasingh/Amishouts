function remove_space(n)
{
	var c='';
	var i=0;
	for(i=0;i<n.length;i++)
	{
		if(n.charAt(i)!=' ')
			c+=n.charAt(i);
	}
	return c;
}

function remove_double(n)
{
	var c='';
	var i;
	for(i=0;i<n.length-1;i++)
	{
		if(n.charAt(i)!=n.charAt(i+1))
			c+=n.charAt(i);
	}
	return c;
}

function remove_nonchar(n)
{
	function isalpha(c)
	{
		if((c>='a' && c<='z') || (c>='A' && c<='Z'))
			return true;
		return false;
	}

	function isdigit(c)
	{
		if(c>='0' && c<='9')
			return true;
		return false;
	}
	var c='';
	var i;
	for(i=0;i<n.length;i++)
	{
		if(isalpha(n.charAt(i)) || isdigit(n.charAt(i)))
			c+=n.charAt(i);
	}
	return c;
}