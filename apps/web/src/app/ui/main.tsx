'use client';

import { useState } from 'react';

import { SearchForm } from '@/app/ui/SearchForm';
import Notes from '@/app/modules/Notes';
import { Note } from '@/app/generated/types';

export function Main() {
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between bg-white" style={{ height: 140 }}>
        <div className="flex px-24 justify-between items-center w-full">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Search Notes
            </h2>
          </div>
          <div className="mt-5 flex lg:ml-4 lg:mt-0 items-center">
            <SearchForm setNotes={setNotes} />
          </div>
        </div>
      </div>
      <Notes notes={notes} />
    </>
  );
}
