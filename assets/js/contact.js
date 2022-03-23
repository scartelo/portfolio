function showForm() {
    console.log("Show")
    // Hide the shower
    document.getElementById('shower-form').style.display = "none"

    // Show the hider
    document.getElementById('hider-form').style.display = "block"

    // Show the form
    document.getElementById("form-contact").style.display = "block";
}

function hideForm() {
    console.log("Hide")
    // Hide the shower
    document.getElementById('shower-form').style.display = "block"

    // Show the hider
    document.getElementById('hider-form').style.display = "none"

    // Show the form
    document.getElementById("form-contact").style.display = "none";
}