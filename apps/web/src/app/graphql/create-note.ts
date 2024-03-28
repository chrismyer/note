import { gql } from '@apollo/client';

export const CREATE_BOOK_MUTATION = gql`
  mutation CreateNote($createNoteArgs: CreateNoteArgs!) {
    createNote(createNoteArgs: $createNoteArgs) {
      id
      title
      message
      createdDate
    }
  }
`;
