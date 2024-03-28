import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CreateNoteArgs = {
  message: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createNote: Note;
  deleteNote: Scalars['String']['output'];
  updateNote: Note;
};


export type MutationCreateNoteArgs = {
  createNoteArgs: CreateNoteArgs;
};


export type MutationDeleteNoteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateNoteArgs = {
  updateNoteArgs: UpdateNoteArgs;
};

export type Note = {
  __typename?: 'Note';
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  noteById: Note;
  searchNotes: Array<Note>;
};


export type QueryNoteByIdArgs = {
  noteId: Scalars['Int']['input'];
};


export type QuerySearchNotesArgs = {
  keyword?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNoteArgs = {
  id: Scalars['Int']['input'];
  message: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateNoteMutationVariables = Exact<{
  createNoteArgs: CreateNoteArgs;
}>;


export type CreateNoteMutation = { __typename?: 'Mutation', createNote: { __typename?: 'Note', id: number, title: string, message: string, createdDate: any } };

export type DeleteNoteMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteNoteMutation = { __typename?: 'Mutation', deleteNote: string };

export type SearchNotesQueryVariables = Exact<{
  keyword?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchNotesQuery = { __typename?: 'Query', searchNotes: Array<{ __typename?: 'Note', id: number, title: string, message: string, createdDate: any }> };

export type UpdateNoteMutationVariables = Exact<{
  updateNoteArgs: UpdateNoteArgs;
}>;


export type UpdateNoteMutation = { __typename?: 'Mutation', updateNote: { __typename?: 'Note', id: number, title: string, message: string, createdDate: any } };


export const CreateNoteDocument = gql`
    mutation CreateNote($createNoteArgs: CreateNoteArgs!) {
  createNote(createNoteArgs: $createNoteArgs) {
    id
    title
    message
    createdDate
  }
}
    `;
export type CreateNoteMutationFn = Apollo.MutationFunction<CreateNoteMutation, CreateNoteMutationVariables>;

/**
 * __useCreateNoteMutation__
 *
 * To run a mutation, you first call `useCreateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNoteMutation, { data, loading, error }] = useCreateNoteMutation({
 *   variables: {
 *      createNoteArgs: // value for 'createNoteArgs'
 *   },
 * });
 */
export function useCreateNoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateNoteMutation, CreateNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNoteMutation, CreateNoteMutationVariables>(CreateNoteDocument, options);
      }
export type CreateNoteMutationHookResult = ReturnType<typeof useCreateNoteMutation>;
export type CreateNoteMutationResult = Apollo.MutationResult<CreateNoteMutation>;
export type CreateNoteMutationOptions = Apollo.BaseMutationOptions<CreateNoteMutation, CreateNoteMutationVariables>;
export const DeleteNoteDocument = gql`
    mutation DeleteNote($id: Int!) {
  deleteNote(id: $id)
}
    `;
export type DeleteNoteMutationFn = Apollo.MutationFunction<DeleteNoteMutation, DeleteNoteMutationVariables>;

/**
 * __useDeleteNoteMutation__
 *
 * To run a mutation, you first call `useDeleteNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNoteMutation, { data, loading, error }] = useDeleteNoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteNoteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNoteMutation, DeleteNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNoteMutation, DeleteNoteMutationVariables>(DeleteNoteDocument, options);
      }
export type DeleteNoteMutationHookResult = ReturnType<typeof useDeleteNoteMutation>;
export type DeleteNoteMutationResult = Apollo.MutationResult<DeleteNoteMutation>;
export type DeleteNoteMutationOptions = Apollo.BaseMutationOptions<DeleteNoteMutation, DeleteNoteMutationVariables>;
export const SearchNotesDocument = gql`
    query SearchNotes($keyword: String) {
  searchNotes(keyword: $keyword) {
    id
    title
    message
    createdDate
  }
}
    `;

/**
 * __useSearchNotesQuery__
 *
 * To run a query within a React component, call `useSearchNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchNotesQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useSearchNotesQuery(baseOptions?: Apollo.QueryHookOptions<SearchNotesQuery, SearchNotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchNotesQuery, SearchNotesQueryVariables>(SearchNotesDocument, options);
      }
export function useSearchNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchNotesQuery, SearchNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchNotesQuery, SearchNotesQueryVariables>(SearchNotesDocument, options);
        }
export function useSearchNotesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchNotesQuery, SearchNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchNotesQuery, SearchNotesQueryVariables>(SearchNotesDocument, options);
        }
export type SearchNotesQueryHookResult = ReturnType<typeof useSearchNotesQuery>;
export type SearchNotesLazyQueryHookResult = ReturnType<typeof useSearchNotesLazyQuery>;
export type SearchNotesSuspenseQueryHookResult = ReturnType<typeof useSearchNotesSuspenseQuery>;
export type SearchNotesQueryResult = Apollo.QueryResult<SearchNotesQuery, SearchNotesQueryVariables>;
export const UpdateNoteDocument = gql`
    mutation UpdateNote($updateNoteArgs: UpdateNoteArgs!) {
  updateNote(updateNoteArgs: $updateNoteArgs) {
    id
    title
    message
    createdDate
  }
}
    `;
export type UpdateNoteMutationFn = Apollo.MutationFunction<UpdateNoteMutation, UpdateNoteMutationVariables>;

/**
 * __useUpdateNoteMutation__
 *
 * To run a mutation, you first call `useUpdateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNoteMutation, { data, loading, error }] = useUpdateNoteMutation({
 *   variables: {
 *      updateNoteArgs: // value for 'updateNoteArgs'
 *   },
 * });
 */
export function useUpdateNoteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNoteMutation, UpdateNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNoteMutation, UpdateNoteMutationVariables>(UpdateNoteDocument, options);
      }
export type UpdateNoteMutationHookResult = ReturnType<typeof useUpdateNoteMutation>;
export type UpdateNoteMutationResult = Apollo.MutationResult<UpdateNoteMutation>;
export type UpdateNoteMutationOptions = Apollo.BaseMutationOptions<UpdateNoteMutation, UpdateNoteMutationVariables>;