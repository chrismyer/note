import { gql } from '@apollo/client';

export const DELETE_BOOK_MUTATION = gql`
  mutation DeleteNote($id: Int!) {
    deleteNote(id: $id)
  }
`;
