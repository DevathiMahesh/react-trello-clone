import { db } from '../firebase';
import { getUser } from './auth';

const userBoards = () => db.ref('users').child(getUser().uid).child('boards');

const userBoard = (board) => userBoards().child(board);

const getBoard = (key) => userBoard(key).once('value');

const addBoard = (board) => userBoards().push(board);

const deleteBoard = (key) => userBoards().child(key).remove();

const getLanes = (key) => userBoard(key).once('value');

const saveLanes = (key, lanes) => userBoard(key).update(lanes);

export const boardService = {
    userBoards,
    getBoard,
    addBoard,
    deleteBoard,
    saveLanes,
    getLanes,
};
