/*	This java script has local variable and global variable, perform arithmatic oprations using functions call.
This is a intependent java script called in HTML code.
In Java script variable are of two types 1. global variable and second is local variable.
*/

function sum()
{
	var a=10;		// global variable
	var b=20;		// global variable
	
	function sum()		// defining a function
	{
		var c=a+b;			//local variable
		document.writeln("Sum of tow no is "+c);
	}

		function sub()
	{
		var c=a-b;
		document.writeln("Subtraction of tow no is "+c);
	}

		function mul()
	{
		var c=a*b;
		document.writeln("Multiplication of tow no is "+c);
	}

		function div()
	{
		var c=a/b;
		document.writeln("Division of two no is "+c);
	}

	sum();		//calling a function
	sub();
	mul();
	div();
}