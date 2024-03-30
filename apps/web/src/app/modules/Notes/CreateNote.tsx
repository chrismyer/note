'use client';

import { useEffect } from 'react';

import Modal from '@/app/components/Modal';
import { Note, SearchNotesQuery, useCreateNoteMutation } from '@/app/generated/types';
import { SEARCH_BOOKS_QUERY } from '@/app/graphql/search-notes';

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const CreateNote = ({ visible, setVisible }: Props) => {
  const [createNote, { loading }] = useCreateNoteMutation({
    update: (cache, result) => {
      const note = result.data?.createNote;
      if (note) {
        const notes = cache.readQuery<SearchNotesQuery>({ query: SEARCH_BOOKS_QUERY });
        if (notes && note) {
          cache.writeQuery({
            query: SEARCH_BOOKS_QUERY,
            data: {
              searchNotes: [note, ...notes?.searchNotes],
            },
          });
        }
      }
    },
  });

  const onCreate = ({ title, message }: Pick<Note, 'title' | 'message'>) => {
    createNote({ variables: { createNoteArgs: { title, message } } });
  };

  useEffect(() => {
    if (!loading) {
      setVisible(false);
    }
  }, [loading]);

  return (
    <Modal
      loading={loading}
      onSubmit={onCreate}
      visible={visible}
      setVisible={setVisible}
      title="Create Note"
    />
  );
};

export default CreateNote;
