import Image from 'next/image';

import { Note } from '@/app/generated/types';

type Props = {
  note: Note;
  onDelete: (id: Note['id']) => void;
  onUpdate: (note: Note) => void;
};

const Notes = ({ note, onDelete, onUpdate }: Props) => {
  return (
    <div className="relative z-10 min-h-32">
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-sm transition-all sm:my-5 sm:w-full sm:max-w-xl border">
        <div className="bg-gray-50 px-4 py-4 sm:flex sm:px-6 border-b">
          <p className="text-md text-black">{note.title}</p>
        </div>
        <div className="bg-white px-6 py-10">
          <p className="text-md text-black">{note.message}</p>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto ml-3"
            onClick={() => onDelete(note.id)}
          >
            <Image className="text-blue-50 mr-2" width={20} height={20} src="/trash.svg" alt="Delete Note" />
            Delete
          </button>
          <button
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            onClick={() => onUpdate(note)}
          >
            <Image className="text-blue-50 mr-2" width={20} height={20} src="/edit.svg" alt="Update Note" />
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
