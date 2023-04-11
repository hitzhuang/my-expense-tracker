import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';
import { DB, EXPENSE_PATH } from './config';

export const createDatabaseExpense = (data: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      let dataToAdd = { ...data, date: Timestamp.fromDate(data.date) };
      let docRef = await addDoc(collection(DB, EXPENSE_PATH), dataToAdd);
      return resolve({ ...data, id: docRef.id });
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });
};

export const updateDatabaseExpense = (id: string, data: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      let dataToUpdate = {
        ...data,
        date: Timestamp.fromDate(new Date(data.date)),
      };
      delete dataToUpdate.id;
      await updateDoc(doc(DB, EXPENSE_PATH, id), dataToUpdate);
      return resolve(data);
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });
};

export const deleteDatabaseExpense = (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(EXPENSE_PATH + 'a');
      let docRef = doc(DB, EXPENSE_PATH, id);
      let snapshot = await getDoc(docRef);
      if (snapshot.exists()) await deleteDoc(docRef);
      else throw new Error(`${id} does not exist.`);
      return resolve(id);
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });
};

export const getAllExpense = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let list: any = [];
      let docRef = collection(DB, EXPENSE_PATH);
      let snapshot = await getDocs(query(docRef, orderBy('date')));
      snapshot.forEach((doc: any) => {
        let data = { ...doc.data() };
        list.push({ id: doc.id, ...data, date: data.date.toDate() });
      });
      return resolve(list);
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });
};
