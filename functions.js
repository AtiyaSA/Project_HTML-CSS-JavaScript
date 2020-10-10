function sel()
{
	var pr,r,i;
	pr=document.getElementById("pr").value;
	if(pr=='Naruto')
	{
		r=1500;
		i='images/naruto/dvd.jpg';
	}
	else if(pr=='Bleach')
	{
		r=1000;
		i='images/bleach/dvd.jpg';
	}
	else if (pr=='Nanatsu no Taizai')
	{
		r=700;
		i='images/7ds/dvd.jpg';
	}
	else if (pr=='Boku no Hero Academia')
	{
		r=700;
		i='images/bnha/dvd.jpg';
	}
	else if (pr=='Full Metal Alchemist')
	{
		r=300;
		i='images/fma/dvd.jpg';
	}
	else if (pr=='Cowboy Bebop')
	{
		r=150;
		i='images/cowboy/dvd.jpg';
	}
	else if (pr=='Another')
	{
		r=100;
		i='images/another/dvd.jpg';
	}
	else if (pr=='Tokyo Ghoul')
	{
		r=100;
		i='images/tg/dvd.jpg';
	}
	else
	{
		r=0;
		i='';
	}
	document.getElementById("i").src=i;
	document.getElementById("r").value=r;
	
}
function add()
{
	var pr,r,q,i;
	pr=document.getElementById("pr").value;
	r=document.getElementById("r").value;
	q=document.getElementById("q").value;
	i=document.getElementById("i").src;
	
	if (p!='select' && q!='select')
	{
	pr1=document.getElementById("pr1").value;
	pr2=document.getElementById("pr2").value;
	pr3=document.getElementById("pr3").value;
		if(pr1==0)
		{
			document.getElementById("pr1").value=pr;
			document.getElementById("r1").value=r;
			document.getElementById("q1").value=q;
			document.getElementById("i1").src=i;
		}
		else if(pr2==0)
		{
			document.getElementById("pr2").value=pr;
			document.getElementById("r2").value=r;
			document.getElementById("q2").value=q;
			document.getElementById("i2").src=i;
		}	
		else if(pr3==0)
		{
			document.getElementById("pr3").value=pr;
			document.getElementById("r3").value=r;
			document.getElementById("q3").value=q;
			document.getElementById("i3").src=i;
		}
		else
		{
			alert("Cart is full");
		}
		}
	else
	{
		alert("Please select both  Product and Quantity");
	}
}
function clc1()
{
			document.getElementById("pr1").value=0;
			document.getElementById("r1").value=0;
			document.getElementById("q1").value=0;
			document.getElementById("i1").src=0;
}
function clc2()
{
			document.getElementById("pr2").value=0;
			document.getElementById("r2").value=0;
			document.getElementById("q2").value=0;
			document.getElementById("i2").src=0;
}
function clc3()
{
			document.getElementById("pr3").value=0;
			document.getElementById("r3").value=0;
			document.getElementById("q3").value=0;
			document.getElementById("i3").src=0;
}
function bill()
{
	var pr1,pr2,pr3,r1,r2,r3,a1=0,a2=0,a3=0,aa=0,q1,q2,q3;
	pr1=document.getElementById("pr1").value;
	r1=document.getElementById("r1").value;
	q1=document.getElementById("q1").value;
	if(pr1!=0 && q1!=0)
	{
		a1=q1*r1;
	}
	pr2=document.getElementById("pr2").value;
	r2=document.getElementById("r2").value;
	q2=document.getElementById("q2").value;
	if(pr2!=0 && q2!=0)
	{
		a2=q2*r2;
	}
	pr3=document.getElementById("pr3").value;
	r3=document.getElementById("r3").value;
	q3=document.getElementById("q3").value;
	if(pr3!=0 && q3!=0)
	{
		a3=q3*r3;
	}
	aa=a1+a2+a3;
	var n,p,e,a;
	n=document.getElementById("n").value;
	p=document.getElementById("p").value;
	e=document.getElementById("e").value;
	a=document.getElementById("a").value;
	if(aa!=0)
	{
		document.getElementById("t").value="Dear "+n+",\nThank you for shopping with us.";
		if(a1!=0)
		{
			document.getElementById("t").value+="\nProduct :"+pr1+" @Rs. "+r1+" \nNumber of unit(s)"+q1+"\n";
		}
		if(a2!=0)
		{
			document.getElementById("t").value+="\nProduct :"+pr2+" @Rs. "+r2+" \nNumber of unit(s)"+q2+"\n";
		}
		if(a3!=0)
		{
			document.getElementById("t").value+="\nProduct :"+pr3+" @Rs. "+r3+" \nNumber of unit(s)"+q3+"\n";
		}
		document.getElementById("t").value+="\nTotal amount to be paid:"+aa+"\nThe confirmation of you order as been sent to the following\nEmail :"+e+"\nPhone Number:"+p+"\n\nThe order will be delivered to the following address:\n"+a;
	}
	else
	{
		alert("Please select Product and its quantity.");
	}
}