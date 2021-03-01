/* Variables for outputting */
var subtotal;
var newtotal;
var discount;
var tax;
var newtax;
var t;
var total;

/* get the quantities */
var x = prompt("How many hot dogs would you like?");
var y = prompt("How many fries would you like?");
var z = prompt("How many drinks would you like?");

document.write("Your order: " + x + " hotdog(s), " + y + " fries, and " + z + " drink(s)");
document.write("<br>");

var hot = parseFloat(x);
var fries = parseFloat(y);
var drink = parseFloat(z);

subtotal = (hot*3.25 + fries*2.00 + drink*1.50);

if(subtotal >= 20){
	discount = subtotal*.10;
	newtotal = subtotal - discount;
} else {
	newtotal = subtotal;
}

tax = newtotal*0.0625;
newtax = tax.toFixed(2);
t = tax + newtotal;
total = t.toFixed(2);

document.write("Subtotal: $" + subtotal);

document.write("<br>");

if(discount > 0){ 
	document.write("Discount: $" + discount);
} else {
	document.write("You did not get a discount this time. Order more next time!")
}

document.write("<br>");

if(newtax > 0) {
	document.write("Tax: $" + newtax);
} else {
	document.write("Tax: $0");
}

document.write("<br>");

if(total > 0) {
	document.write("Total: $" + total);
} else {
	document.write("Total: $0");
}




