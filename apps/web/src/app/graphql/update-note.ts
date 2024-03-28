import { gql } from '@apollo/client';

export const UPATE_BOOK_MUTATION = gql`
  mutation UpdateNote($updateNoteArgs: UpdateNoteArgs!) {
    updateNote(updateNoteArgs: $updateNoteArgs) {
      id
      title
      message
      createdDate
    }
  }
`;
