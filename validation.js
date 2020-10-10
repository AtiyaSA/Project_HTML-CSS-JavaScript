function checkname()
{
	var nm,nc;
	nm=document.getElementById("n").value;
	nc=/^[a-zA-Z ]+$/;
	if((!nm.match(nc))||(nm.charAt(0)==" "))
	{
		document.getElementById("ne").innerHTML="**Name Error**";
	return 'n';
	}
	else
	{
		document.getElementById("ne").innerHTML="";
	return 'y';
	}
}
function checkdate()
{
	var d,ed,sd,ey,sy;
	d=document.getElementById("d").value;
	ed=new Date(d);
	sd=new Date();
	ey=ed.getFullYear();
	sy=sd.getFullYear();
	if(sy-ey<18||d=="")
	{
		document.getElementById("de").innerHTML="**date Error**";
	return 'n';
	}
	else
	{
		document.getElementById("de").innerHTML="";
	return 'y';
	}
}
function checkemail()
{
	var em,ec;
	em=document.getElementById("e").value;
	ec=/^[a-zA-Z0-9._-]+\@[a-zA-Z]+\.[a-zA-Z.]{2,6}$/;
	if(!em.match(ec))
	{
		document.getElementById("ee").innerHTML="**Email Error**";
	return 'n';
	}
	else
	{
		document.getElementById("ee").innerHTML="";
return 'y';
		}
}
function checkphone()
{
	var ph,phc;
	ph=document.getElementById("p").value;
	phc=/^[0-9]{10,10}$/;
	if(!ph.match(phc))
	{
		document.getElementById("pe").innerHTML="**Phone Number Error**";
	return 'n';
	}
	else
	{
		document.getElementById("pe").innerHTML="";
	return 'y';
	}
}
function checkaddress()
{
	var nm,nc;
	nm=document.getElementById("a").value;
	nc=/^[a-zA-Z0-9.#-, ]{10,200}$/;
	if((!nm.match(nc))||(nm.charAt(0)==" "))
	{
		document.getElementById("ae").innerHTML="**Name Error**";
	return 'n';
	}
	else
	{
		document.getElementById("ae").innerHTML="";
		return 'y';
	}
}
function show()
{
	if(checkname()=='y' && checkphone()=='y' && checkemail()=='y' && checkaddress()=='y' && checkdate()=='y')
	{
	var n,e,p,a,d;
	a=document.getElementById("a").value;
	n=document.getElementById("n").value;
	e=document.getElementById("e").value;
	p=document.getElementById("p").value;
	d=document.getElementById("d").value;
	document.getElementById("t").value="Name		:"+n+"\nDOB		:"+d+"\nEmail		:"+e+"\nPhone Number    :"+p+"\nAddress		:"+a;
}
else
{
alert("check");
checkname();
checkphone();
checkemail();
checkaddress();
checkdate();
}
}