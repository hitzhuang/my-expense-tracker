import { firestore } from '.';
import { FIREBASE_APP_NAME } from '@env';

const APP_PATH = `portfolio/${FIREBASE_APP_NAME}`;

export const DB = firestore;
export const EXPENSE_PATH = `${APP_PATH}/expenses`;
