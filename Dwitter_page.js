//YOUR FIREBASE LINKS
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
    R_name = localStorage.getItem("R_name");

    function send() {
      msg = document.getElementById('msg').value;
      firebase.database().ref(R_name).push({
            name : U_name,
            msg : msg,
            like : 0
            
      });
      
          document.getElementById('msg').value ="";


      }

function getData() { firebase.database().ref("/"+R_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code
console.log(firebase_message_id);
console.log(message_data);

name = message_data["name"];
message = message_data["msg"];
like = message_data["like"];

name_tag = "<h4>" + name + "<img class='user_tick'> <src='tick.png'> </h4>";
message_tag = "<h4 class='message_h4'>" + message + "</h4>";

like_button ="<button class='btn btn-warning' id="+firebase_message_id+ " value="+like+ " onclick='updateLike(this.id)'>";
span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_tag + message_tag +like_button + span_tag;
document.getElementById("output").innerHTML += row;


//End code
}});}); }

getData();

function updateLike(message_id) {
      console.log("likedmsgid - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatedLikes = Number(likes) + 1;
      firebase.database().ref(R_name).child(message_id).update ({
            like : updatedLikes
      })
}