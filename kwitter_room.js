

//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyCoItS6pb2DqRId4cQChCh1QbNlnJtxoR4",
  authDomain: "twitter-155a9.firebaseapp.com",
  databaseURL: "https://twitter-155a9-default-rtdb.firebaseio.com",
  projectId: "twitter-155a9",
  storageBucket: "twitter-155a9.appspot.com",
  messagingSenderId: "120147529027",
  appId: "1:120147529027:web:9aa562dc6844648916b3f6"
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

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
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
