(function() {

    const emailTxt = document.getElementById('email');
    const password = document.getElementById('password');
    const signUp = document.getElementById('signUp');

    signUp.addEventListener('click', e =>{
        const email = emailTxt.value;
        const pass = password.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch( function(e){ // in case of error print message
            let p = document.createElement('p');
            p.className = 'errorMsg';
            p.innerHTML = e.message;
            document.getElementsByTagName('p')[0].appendChild(p);
        });

    });

    //realtime auth listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser){
            location.href = 'index.html'; // sends to homepage if user logged in
        } else{
            console.log('Not logged in.');
        }
    });

}());