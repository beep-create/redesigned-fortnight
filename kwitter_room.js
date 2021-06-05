

//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyCL9VazUxtMhD2TCoXdNpPkIIUmUshfTks",
  authDomain: "twitter-6d065.firebaseapp.com",
  databaseURL: "https://twitter-6d065-default-rtdb.firebaseio.com",
  projectId: "twitter-6d065",
  storageBucket: "twitter-6d065.appspot.com",
  messagingSenderId: "687952230904",
  appId: "1:687952230904:web:72649c6612fdb016d57e0d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome to St. Fairy's, "+ user_name + "!";

function addRoom() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "Oceana loves flags" });
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}

function logOut() {
window.location="index.html"
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
  document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot)
   {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();
var ok = "was ist dein lieblingsfach";
