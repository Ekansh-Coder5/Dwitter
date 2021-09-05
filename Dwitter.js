function login() {
    U_name = document.getElementById('name').value;
    localStorage.setItem("U_name", U_name);
    window.location = "Dwitter_room.html";
}