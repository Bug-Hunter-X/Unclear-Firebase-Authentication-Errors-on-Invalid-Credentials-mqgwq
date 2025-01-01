To improve error handling, check the `errorCode` property of the Firebase error object.  While not always perfectly descriptive, it gives more information than a generic message.  This example provides more user-friendly error messages based on common Firebase error codes.

```javascript
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Signed in as:", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
    if (errorCode === 'auth/invalid-email') {
      alert('Invalid email address.');
    } else if (errorCode === 'auth/user-not-found') {
      alert('User not found.');
    } else if (errorCode === 'auth/wrong-password') {
      alert('Incorrect password.');
    } else {
      alert('An error occurred. Please try again later.');
    }
  });
```