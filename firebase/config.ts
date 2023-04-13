import { firestore } from '.';
import { FIREBASE_APP_NAME } from '@env';

const APP_PATH = `portfolio/${FIREBASE_APP_NAME}`;

export const DB = firestore;
export const USER_PATH = (userId: string) => `${APP_PATH}/users/${userId}`;
export const EXPENSE_PATH = `${APP_PATH}/expenses`;
// export const EXPENSE_PATH = (userId: string) => `${USER_PATH(userId)}/expenses`;
