import { auth } from '.';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';

export const signupUser = (name: string, email: string, password: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      return resolve({ name, email });
    } catch (error: any) {
      console.log(error);
      return reject(error.code);
    }
  });
};

export const loginUser = (email: string, password: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      let auth = getAuth();
      let res: any = await signInWithEmailAndPassword(auth, email, password);
      return resolve({ email, name: res.user?.displayName });
    } catch (error: any) {
      console.log(error);
      return reject(error.code);
    }
  });
};

export const signoutUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await signOut(getAuth());
      return resolve('User has been logout.');
    } catch (error: any) {
      console.log(error);
      return reject(error.code);
    }
  });
};

export const sendVerificationCode = (email: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return resolve(
        'Please check: \nReset password link has been sent to your email.'
      );
    } catch (error: any) {
      console.log(error);
      return reject(error.code);
    }
  });
};

export const confirmPasswordReset = (oobCode: string, password: string) => {
  return new Promise(async (resolve, reject) => {
    try {
    } catch (error) {}
  });
};
