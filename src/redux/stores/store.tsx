import { configureStore } from '@reduxjs/toolkit'
import { notesReducer } from '../reducers/notesReducer';

export const store = configureStore({ reducer: notesReducer });
