function validateForm() {
    
    let name = document.getElementById("txtName").value;
    let phone = document.getElementById("txtPhone").value;
    let message = document.getElementById("txtMessage").value;

    if (name === "" || phone === "" || message === "") {
        alert("Please complete the form");
        return false;
    }
    if (name.length < 3) {
        alert("More than 3 characters expected");
        return false;
    }

    return true;
}