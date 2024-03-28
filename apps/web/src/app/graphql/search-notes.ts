import { gql } from '@apollo/client';

export const SEARCH_BOOKS_QUERY = gql`
  query SearchNotes($keyword: String) {
    searchNotes(keyword: $keyword) {
      id
      title
      message
      createdDate
    }
  }
`;
