import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';

export const signupUser = (name: string, email: string, password: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      let auth: any = getAuth();
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
      return resolve('ok');
    } catch (error: any) {
      console.log(error);
      return reject(error.code);
    }
  });
};
