// const auth = firebase.auth();
// auth.signInWithEmailAndPassword(email, pass);
// auth.createUserWithEmailAndPassword(email, pass);
// auth.onAuthStateChange(firebaseUser => {});


(function() {


    const emailTxt = document.getElementById('email');
    const password = document.getElementById('password');
    const login = document.getElementById('login');
    const signUp = document.getElementById('signUp');

    console.log(emailTxt, password, login, signUp);

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
            logOut.classList.remove('hide');
        } else{
            console.log('Not logged in.');
        }
    });

}());