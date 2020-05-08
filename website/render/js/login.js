

(function() {


    const emailTxt = document.getElementById('email');
    const password = document.getElementById('password');
    const login = document.getElementById('login');
    const signUp = document.getElementById('signUp');


    //add login event
    login.addEventListener('click', e => {
        //get email, password
        const email = emailTxt.value;
        const pass = password.value;
        const auth = firebase.auth();
        //sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch( e => console.log(e.message));
    });

    signUp.addEventListener('click', e =>{
        const email = emailTxt.value;
        const pass = password.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch( e => console.log(e.message));
    });

    //realtime auth listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser){
            console.log(firebaseUser);
        } else{
            console.log('Not logged in.');
        }
    });

}());