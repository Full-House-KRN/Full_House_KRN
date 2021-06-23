var apiKey = config.apiKey;
var authDomain = config.authDomain;
var projectId = config.projectId;
var storageBucket = config.storageBucket;
var messagingSenderId = config.messagingSenderId;
var appId = config.appId;

var firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();

  function signUp(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => alert(e.message));
	  alert("Signed Up");
  }

  function signIn(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    const promise = auth.signInWithEmailAndPassword(email, password);
		promise.catch(e => alert(e.message));

	  alert("Signed In" + email);


  }

  function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}

  
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			window.location.href = "home.html"
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});

