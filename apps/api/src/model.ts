
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateNoteArgs {
    title: string;
    message: string;
}

export interface UpdateNoteArgs {
    id: number;
    title: string;
    message: string;
}

export interface Note {
    id: number;
    title: string;
    message: string;
    createdDate: DateTime;
}

export interface IQuery {
    searchNotes(keyword?: Nullable<string>): Note[] | Promise<Note[]>;
    noteById(noteId: number): Note | Promise<Note>;
}

export interface IMutation {
    createNote(createNoteArgs: CreateNoteArgs): Note | Promise<Note>;
    updateNote(updateNoteArgs: UpdateNoteArgs): Note | Promise<Note>;
    deleteNote(id: number): string | Promise<string>;
}

export type DateTime = any;
type Nullable<T> = T | null;
