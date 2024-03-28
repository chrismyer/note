'use client';
import { forwardRef, ForwardedRef } from 'react';

import { Note } from '@/app/generated/types';

type Props = {
  data?: Note;
};

const Form = forwardRef(({ data }: Props, ref: ForwardedRef<HTMLFormElement>) => {
  return (
    <form ref={ref}>
      <div className="space-y-12">
        <div className="pb-12">
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="block flex-1 border-0 bg-transparent p-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full"
                    placeholder="some title"
                    defaultValue={data?.title}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="block w-full rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={data?.message}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a helpful message to yourself.</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
});

export default Form;
