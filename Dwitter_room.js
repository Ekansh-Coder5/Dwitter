var firebaseConfig = {
      apiKey: "AIzaSyByEOiiqRFExlKKALJVNLEADUSggrYbuoA",
      authDomain: "dwitter--official-firebase.firebaseapp.com",
      databaseURL: "https://dwitter--official-firebase-default-rtdb.firebaseio.com",
      projectId: "dwitter--official-firebase",
      storageBucket: "dwitter--official-firebase.appspot.com",
      messagingSenderId: "119105862601",
      appId: "1:119105862601:web:47620f3f2cbb0142f6c618",
      measurementId: "G-T2DYF589LD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    U_name = localStorage.getItem("U_name");
document.getElementById('U_name').innerHTML = "Welcome " + U_name +"!"




function add_room() {

R_name = document.getElementById('R_name').value;
firebase.database().ref("/").child(R_name).update({
       purpose : "adding room name" 
});

localStorage.setItem("R_name", R_name);
window.location = "Dwitter_page.html"

}





function getData() {
       firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='Redirect(this.id)' >#"+ Room_names +"</div><hr>";

      document.getElementById('output').innerHTML += row;
      //End code
      });});}
getData();

function Redirect(name) {
       localStorage.setItem('Roome_name', name);
       window.location = "Dwitter_page.html";
}

function logout() {
       localStorage.removeItem('U_name');
       localStorage.removeItem('R_name');
       window.location = "index.html"
}