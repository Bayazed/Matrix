function matrixA(width, height)
{
	var matrixA = "";
	for (var i = 0; i < height; i++)
	{
		matrixA += "<tr>";						
		for (var j = 0; j < width; j++)
		{
			var id_td = "a" + i + "," + j;		
			matrixA += "<td id = 'a" + i + "" + j + "'><input type='text' name='a' required id ='" + id_td + "' maxlength='2' placeholder='a"
			+ (i + 1) + "," + (j + 1) + "' onfocus='this.style.color = \"#404040\"; document.getElementById(\"sitebar\").style.background = \"#009ADE\"; $(\"#a" + i + "" + j + "\").addClass(\"focus\");'"
			+ "onkeydown='javascript:	return (((event.keyCode>47) && (event.keyCode<58)) || (event.keyCode == 8) || (event.keyCode == 46) || (event.keyCode == 37) || (event.keyCode == 39) || ((event.keyCode>95) && (event.keyCode<106)))' onkeyup='if ((+this.value < 10 && +this.value > 1) || +this.value == 0){this.setAttribute(\"maxlength\", 1);}else if (+this.value == 1){this.setAttribute(\"maxlength\", 2);}if (+this.value > 10){this.value = 10;} check(index_width_a, index_height_a, index_width_b, index_height_b);' onblur='if(this.value == \"\"){this.style.color = \"#CDCDCD\";} document.getElementById(\"sitebar\").style.background = \"#BDBDBD\"; $(\"#a" + i + "" + j + "\").removeClass(\"focus\"); check(index_width_a, index_height_a, index_width_b, index_height_b);'></td>";
		}
		matrixA += "</tr>";
	} 

	return matrixA;
}

function matrixB(width, height)
{
	var matrixB = "";
	for (var i = 0; i < height; i++)
	{
		matrixB += "<tr>";						
		for (var j = 0; j < width; j++)
		{
			var id_td = "b" + i + "," + j;		
			matrixB += "<td id = 'b" + i + "" + j + "'><input type='text' name='b' required id ='" + id_td + "' maxlength='2' placeholder='b"
			+ (i + 1) + "," + (j + 1) + "' onfocus='this.style.color = \"#404040\"; document.getElementById(\"sitebar\").style.background = \"#009ADE\"; $(\"#b" + i + "" + j + "\").addClass(\"focus\");'"
			+ " onkeydown='javascript:	return (((event.keyCode>47) && (event.keyCode<58)) || (event.keyCode == 8) || (event.keyCode == 46) || (event.keyCode == 37) || (event.keyCode == 39) || ((event.keyCode>95) && (event.keyCode<106)))' onkeyup='if ((+this.value < 10 && +this.value > 1) || +this.value == 0){this.setAttribute(\"maxlength\", 1);}else if (+this.value == 1){this.setAttribute(\"maxlength\", 2);}if (+this.value > 10){this.value = 10;} check(index_width_a, index_height_a, index_width_b, index_height_b);' onblur='if(this.value == \"\"){this.style.color = \"#CDCDCD\";} document.getElementById(\"sitebar\").style.background = \"#BDBDBD\"; $(\"#b" + i + "" + j + "\").removeClass(\"focus\"); check(index_width_a, index_height_a, index_width_b, index_height_b);'></td>";
		}
		matrixB += "</tr>";
	}

	return matrixB;
}

function matrixC(width, height)
{
	var matrixC = "";
	for (var i = 0; i < height; i++)
	{
		matrixC += "<tr>";						
		for (var j = 0; j < width; j++)
		{
			matrixC += "<td id ='c" + i + "," + j + "'>c" + (i + 1) + "," + (j  + 1) + "</td>";
		}
		matrixC += "</tr>";
	}
	document.getElementById('matrix_c').style.color = '#CDCDCD';
	return matrixC;
}

function error(flag)
{
	var a, b;
	if(flag)
	{
		a = "A";
		b = "B";
	}
	else
	{
		a = "B";
		b = "A";
	}

	var text = "Такие матрицы нельзя перемножить, так как количество столбцов матрицы "
	 		   + a + " не равно количеству строк матрицы " + b + ".";

	document.getElementById("sitebar").style.background = "#FFC2C1";
	document.getElementById("information").innerHTML = text;
}

function error_off()
{
	document.getElementById("sitebar").style.background = "#BDBDBD";
	document.getElementById("information").innerHTML = "";
}

function matrixC_answer(flag, width, height, general_side)
{	
	var a, b;
	if(flag)
	{
		a = "a";
		b = "b";
	}
	else
	{
		a = "b";
		b = "a";
	}

	for (var i = 0; i < height; i++)
	{
		for (var j = 0; j < width; j++)
		{
			var id_c = "c" + i + "," + j;
			var answer = 0;
			var k = 0;
			
			while (k < general_side)
			{
				var id_a = a + i + "," + k;
				var id_b = b + k + "," + j;
				var valueA = Number(document.getElementById(id_a).value);
				var valueB = Number(document.getElementById(id_b).value);
				answer += (valueA * valueB);
				k++; 
			}
						
			document.getElementById(id_c).innerHTML = answer;
			document.getElementById('matrix_c').style.color = '#404040';
		}
	}
}

function saveMatrixA(width, height)
{
	var mas = [];
	for (var i = 0; i < height; i++)
	{
		mas[i] = [];
		for (var j = 0; j < width; j++)
		{
			mas[i][j] = document.getElementById("a" + i + "," + j).value;
		}
	}
	return mas;
}

function saveMatrixB(width, height)
{
	var mas = [];
	for (var i = 0; i < height; i++)
	{
		mas[i] = [];
		for (var j = 0; j < width; j++)
		{
			mas[i][j] = document.getElementById("b" + i + "," + j).value;
		}
	}
	return mas;
}

function setMatrixA(mas, width, height)
{
	for (var i = 0; i < height; i++)
		for (var j = 0; j < width; j++)
		{			
			if (mas[i][j] != "")
			{
				document.getElementById("a" + i + "," + j).value = mas[i][j];
				document.getElementById("a" + i + "," + j).style.color = "#404040";
			}			
		}
}

function setMatrixB(mas, width, height)
{
	for (var i = 0; i < height; i++)
		for (var j = 0; j < width; j++)
		{			
			if (mas[i][j] != "")
			{
				document.getElementById("b" + i + "," + j).value = mas[i][j];
				document.getElementById("b" + i + "," + j).style.color = "#404040";
			}
		}
}

function marginLogoTop(top)
{
	top = top * 50 + (top - 1) * 10;
	top = top / 2 + 35;
	document.getElementById("logo_A").style.marginTop = top + "px";
}

function marginLogoLeft(left)
{
	left = left * 50 + (left - 1) * 10;
	left = left / 2 + 43;
	document.getElementById("logo_B").style.marginLeft = left + "px";
}

function check(widthA, heightA, widthB, heightB)
{
	var flag1 = true, flag2 = true;

	for (var i = 0; i < heightA; i++)
		for (var j = 0; j < widthA; j++)
		{
			var el = document.getElementById("a" + i + "," + j);
			if (el.value == "")
			{
				flag1 = false;
			}
		}

	for (var i = 0; i < heightB; i++)
		for (var j = 0; j < widthB; j++)
		{
			var el = document.getElementById("b" + i + "," + j);
			if (el.value == "")
			{
				flag2 = false;
			}
		}

	if (flag1 && flag2)
	{
		$("#multiplication").removeClass("close");
		document.getElementById("multiplication").disabled = false;
	}
	else
	{
		$("#multiplication").addClass("close");
		document.getElementById("multiplication").disabled = true;		
	}
}

