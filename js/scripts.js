var a = prompt('Podaj podstawę trójkąta a:');
var b = prompt('Podaj wysokość trójkąta h:');
function getTriangleArea(a, h) {
	if (a > 0 || h > 0) {
		return a*h/2;
	} else {
		console.log('Nieprawidłowe dane.');
	}
}

console.log(getTriangleArea(10,6));

var triangleArea1 = getTriangleArea(5,5);
var triangleArea2 = getTriangleArea(8,15);
var triangleArea3 = getTriangleArea(9,22);