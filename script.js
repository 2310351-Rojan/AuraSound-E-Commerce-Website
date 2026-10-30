// Function for Button 1 (Home Page)
function getDiscount() {
    alert("Discount Code: SAVE20! Enjoy 20% off on your first order.");
}

// Function for Button 2 (Contact Page)
function submitContact() {
    var name = document.getElementById("box1").value;
    
    if (name === "") {
        alert("Please enter your name!");
    } else {
        alert("Thank you " + name + ", your message has been submitted successfully!");
    }
}