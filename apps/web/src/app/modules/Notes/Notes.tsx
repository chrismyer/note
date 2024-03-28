import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Note as NoteType, useDeleteNoteMutation, useUpdateNoteMutation } from '@/app/generated/types';
import Modal from '@/app/components/Modal';
import CreateNote from '@/app/modules/Notes/CreateNote';

import Note from './Note';

type Props = {
  notes: NoteType[];
};

const Notes = ({ notes }: Props) => {
  const [currentNote, setCurrentNote] = useState<NoteType>();
  const [updateVisible, setUpdateVisible] = useState(false);
  const [createVisible, setCreateVisible] = useState(false);
  const [deleteNote] = useDeleteNoteMutation({
    update: (cache, result) => {
      const noteId = result.data?.deleteNote;
      if (noteId) {
        const id = cache.identify({ id: noteId, __typename: 'Note' });
        cache.evict({ id });
        cache.gc();
      }
    },
  });

  const onDelete = (id: NoteType['id']) => {
    deleteNote({ variables: { id } });
  };

  const [updateNote, { loading }] = useUpdateNoteMutation();

  const onUpdate = (note: NoteType) => {
    setUpdateVisible(true);
    setCurrentNote(note);
  };

  const onUpdateNote = (note: NoteType) => {
    updateNote({ variables: { updateNoteArgs: { ...note, id: currentNote?.id as NoteType['id'] } } });
  };

  useEffect(() => {
    if (!loading) {
      setUpdateVisible(false);
    }
  }, [loading]);

  return (
    <>
      <div className="flex flex-col bg-slate-50 border-t" style={{ height: 'calc(100vh - 140px)' }}>
        <div className="flex justify-end w-full px-24 pt-4">
          <button
            className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setCreateVisible(true)}
            type="button"
          >
            <Image className="text-blue-50 mr-2" width={20} height={20} src="/create.svg" alt="Create Note" />
            Create Note
          </button>
        </div>
        <div className="grid grid-cols-4 gap-6 w-full px-24 pt-4">
          {notes?.map((note) => <Note note={note} onDelete={onDelete} onUpdate={onUpdate} />)}
        </div>
      </div>

      <Modal
        data={currentNote}
        loading={loading}
        onSubmit={onUpdateNote}
        visible={updateVisible}
        setVisible={setUpdateVisible}
        title="Update Note"
      />
      <CreateNote visible={createVisible} setVisible={setCreateVisible} />
    </>
  );
};

export default Notes;
