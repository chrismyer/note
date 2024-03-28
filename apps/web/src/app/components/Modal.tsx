'use client';

import { Fragment, useRef, useState } from 'react';
import { z } from 'zod';
import { Dialog, Transition } from '@headlessui/react';
import classnames from 'classnames';

import { Note } from '@/app/generated/types';
import { Spinner } from '@/app/ui/Spinner';

import Form from './Form';

const noteSchema = z
  .object({
    title: z.string().min(1).max(50),
    message: z.string().min(20).max(300),
  })
  .strict();

type Props = {
  data?: Note;
  loading: boolean;
  onSubmit: (note: Note) => void;
  setVisible: (visible: boolean) => void;
  title: string;
  visible: boolean;
};

const Modal = ({ data, loading, onSubmit, setVisible, title, visible }: Props) => {
  const cancelButtonRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const onSubmitForm = () => {
    setErrors([]);
    const form = new FormData(formRef.current as HTMLFormElement);
    const entries = Object.fromEntries(form);

    const valid = noteSchema.safeParse(entries);
    if (valid.success) {
      onSubmit(Object.fromEntries(form) as unknown as Note);
    } else {
      const noteErrors = valid.error.issues.map(({ message, path }) => `${path[0]}: ${message}`);
      setErrors(noteErrors);
    }
  };

  return (
    <Transition.Root show={visible} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setVisible}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-green-600"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                      </svg>
                    </div>
                    <div className="mt-2 text-center sm:ml-4 sm:text-left w-full pr-12">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        {title}
                      </Dialog.Title>
                      {errors.length && (
                        <div className="mt-2">
                          {errors.map((error) => (
                            <p className="text-sm text-red-500">{error}</p>
                          ))}
                        </div>
                      )}
                      <div className="mt-2">
                        <Form data={data} ref={formRef} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    className={classnames(
                      'inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3 sm:w-auto',
                      loading && 'opacity-50 cursor-default',
                    )}
                    disabled={loading}
                    onClick={() => onSubmitForm()}
                    type="button"
                  >
                    {loading ? <Spinner /> : 'Submit'}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setVisible(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
