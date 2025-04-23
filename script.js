// Shows a simple alert dialog
function show_alert () {
    // The alert function displays a simple alert box with a message.
    alert("This is a simple alert box!");
}

// Shows a confirm dialog and displays the result in the message area
function myFunction() {
    // The confirm function displays a dialog with OK and Cancel buttons
    if(confirm("Do you want to continue?") == true) {
        // If the user clicks OK, update the message area to show the result
        document.getElementById("message").innerText = "You clicked OK!";
    }
    else {
        // If the user clicks Cancel, update the message area to show the result
        document.getElementById("message").innerText = "You clicked Cancel!";
    }
}

// Shows a prompt dialog and displays the user's name or a fallback message
function show_prompt() {
    // The prompt function asks the user to enter their name in a dialog box.
    let name = prompt("What is your name?");

    // Check if the user entered something valid (not null and not just spaces)
    if (name !== null && name.trim() !== "") {
        // If valid, update the message area with the user's name
        document.getElementById("message").innerText = "Hello, " + name.trim() + "!";
    } else {
        // If the user didn't enter a name or cancelled, show a fallback message
        document.getElementById("message").innerText = "You didn't enter a name.";
    }
}
