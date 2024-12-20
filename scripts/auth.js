ERRORMSG = "There was problem logging in please confirm your email and password and try again.";
let firebaseConfig = {
    apiKey: "AIzaSyADyPuC1s4jMG2cnM4GWmUdVWpvC68Aa_A",
    authDomain: "auth-justforcode-com.firebaseapp.com",
    databaseURL: "https://auth-justforcode-com.firebaseio.com",
    projectId: "auth-justforcode-com",
    storageBucket: "auth-justforcode-com.appspot.com",
    messagingSenderId: "525435555769",
    appId: "1:525435555769:web:ce57e46b2c9a7d98eb7068"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();


$(document).ready(() =>{
    firebase.auth().onAuthStateChanged(function(user) {
        $('error').css({display:'none'});
        if(user){
            let urlParams = new URLSearchParams(location.search);
            if(urlParams.has('d')){
                let destURL = urlParams.get('d');

                destURL = destURL.includes('?') ? `${destURL}&r=572457`:`${destURL}?r=572457`;

                window.open(destURL,'_self',false)
            }else{
                alert("Error Authenticating");
                window.open('/404.html','_self',false)
            }
        }
    });

    $('#submit-button').click( () =>{;
        let pass = $('#password').val();
        let email = $('#email').val();
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
            console.log(error.message);
            $('error').css({display:'block'});
            $('error').text(ERRORMSG);
        });
    });
})