"using strict;"
//window.alert ("connected");
//create the data for the table here
//array is a list of things []
var products = [
	{item: "burger", price: 5.50},
	{item: "fries", price: 2.25},
	{item: "drink", price: 1.00},
	{item: "chicken nuggets", price: 2.50},
];
//console.log("length is " + products.length);
//console.log(products[0]);
//console.log("item is " + products[0].item); 
//console.log("price is " + products[0].price);

//create a variable for HTML code
//to build a table 
var tableHTML = "<table>" + 
		"<caption>MENU</caption>" +
		"<tr><th>Item</th><th>Price</th></tr>";
//console.log(tableHTML);
for(var i = 0; i < products.length; i++) {
	//add the rows for each product[i]
	tableHTML += "<tr><td>" + products[i].item + "</td><td>" + products[i].ptice + "</td></tr>";
}
//add the rows for the products
//close the table
//tableHTML = tableHTML + "</table>";
tableHTML +=  "</table>"; 
//console.log(tableHTML);
//display this table in the div in HTML
document.getElementById("menu").innerHTML = tableHTML;
