import { uuidv4 } from '@firebase/util';
import { onValue, orderByChild, query, ref, remove, set } from 'firebase/database';
import { getDatabase } from 'firebase/database';
import { app } from './config';

const USERS_REF_NAME = 'users';
const database = getDatabase(app);

export function getAllUsersRef(...constraints) {
    return query(ref(database, USERS_REF_NAME), ...constraints);
}

export function deleteUser(id) {
    return remove(ref(database, `users/${id}`));
}

export function createUser(user) {
    return set(ref(database, `users/${uuidv4()}`), user);
}

export function createUsersListener(callback = () => null) {
    return onValue(getAllUsersRef(orderByChild('age')), callback);
}
