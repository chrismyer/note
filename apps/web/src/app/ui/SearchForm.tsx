'use client';

import { ChangeEvent, useEffect, useRef } from 'react';
import { useLazyQuery } from '@apollo/client';

import type { Note } from '@/app/generated/types';
import { SEARCH_BOOKS_QUERY } from '@/app/graphql/search-notes';

import Submit from './Submit';

type Props = {
  setNotes: (notes: Note[]) => void;
};

export function SearchForm({ setNotes }: Props) {
  const keywordRef = useRef('');
  const [searchNotes, { loading, data }] = useLazyQuery(SEARCH_BOOKS_QUERY);

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const keyword = form.get('keyword') as string;
    keywordRef.current = keyword;
    searchNotes({ variables: { keyword } });
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === '') {
      searchNotes();
    }
  };

  useEffect(() => {
    searchNotes();
  }, []);

  useEffect(() => {
    if (loading === false && data?.searchNotes) {
      setNotes(data.searchNotes);
    }
  }, [data, loading]);

  return (
    <>
      <form className="relative pl-20 flex space-between items-center" onSubmit={onSubmit}>
        <div className="relative rounded-md shadow-sm mr-3">
          <input
            type="text"
            name="keyword"
            id="keyword"
            className="block w-full rounded-md border-0 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 !outline-none"
            onChange={onChangeInput}
            placeholder="Search Notes"
          />
        </div>
        <Submit loading={loading} />
      </form>
    </>
  );
}
