import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBN4S6x6Fwr1PBzfqa9cDJ_YxJ9d9YTOOo",
    authDomain: "medclbkey-65f74.firebaseapp.com",
    projectId: "medclbkey-65f74",
    storageBucket: "medclbkey-65f74.appspot.com",
    messagingSenderId: "330384169777",
    appId: "1:330384169777:web:998e61c8fd80d5765fee10",
    measurementId: "G-DQQ95L4BRH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  import { getFirestore, doc, setDoc, addDoc} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
  

  
  // Listen for form submit
  document.getElementById('book').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();

    const db = getFirestore();
	let NameBox = document.getElementById("Namebox");
	let RollBox = document.getElementById("numbox");
	let SecBox = document.getElementById("mailbox");
	let GenBox = document.getElementById("datebox");
	let Insbtn = document.getElementById("submitbtn");
	
	async function AddDocument_CustomID() {
		var ref = doc(db, "patientlist", document.getElementById("NumBox").value);
		await setDoc(
			ref, {
			NameofStd: document.getElementById("NameBox").value,
			RollNo: document.getElementById("NumBox").value,
			Section: document.getElementById("EmailBox").value,
			Gender: document.getElementById("DateBox").value
		}
		)

			.then(() => {

				alert("data added successfully");

			}
			)
			.catch((error) => {
				alert("unsuccessfull,error:" + error);
			});

	}
	
	
	Insbtn.addEventListener("click", AddDocument_CustomID);
	
	

 





  
//     // Get values
//     const db = getFirestore();
//     var name = getInputVal('namebox');
//     var email = getInputVal('mailbox');
//     var num = getInputVal('numbox');
//     var date = getInputVal('datebox');
  
//     // Save message
//     saveMessage(name,email, num, date);
  
//     // Show alert
//     document.querySelector('.alert').style.display = 'block';
  
//     // Hide alert after 3 seconds
//     setTimeout(function(){
//       document.querySelector('.alert').style.display = 'none';
//     },3000);
  
//     // Clear form
//     document.getElementById('book').reset();
//   }
  
//   // Function to get get form values
//   function getInputVal(id){
//     return document.getElementById(id).value;
//   }
  
//   // Save message to firebase
//   function saveMessage(name,email, num, date){
//     var newMessageRef = messagesRef.push();
//     newMessageRef.set({
//       name: name,
//       email:email,
//       num:num,
//      date:date
//     });
  }