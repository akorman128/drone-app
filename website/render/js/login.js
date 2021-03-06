

(function() {


    const emailTxt = document.getElementById('email');
    const password = document.getElementById('password');
    const login = document.getElementById('login');


    //add login event
    login.addEventListener('click', e => {
        //get email, password
        const email = emailTxt.value;
        const pass = password.value;
        const auth = firebase.auth();
        //sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch( function(e){ // in case of error print message on page
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