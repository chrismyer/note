import classnames from 'classnames';

import { Spinner } from './Spinner';

type Props = {
  loading: boolean;
};

export default function Submit({ loading }: Props) {
  return (
    <div role="status">
      <button
        className={classnames(
          'inline-flex bg-indigo-600 hover:bg-indigo-600 text-white font-bold px-4 py-2.5 rounded-md min-w-24 justify-center',
          loading && 'opacity-50 cursor-default',
        )}
        disabled={loading}
        type="submit"
      >
        {loading ? <Spinner /> : 'Search'}
      </button>
    </div>
  );
}
