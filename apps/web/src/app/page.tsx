import { Main } from '@/app/ui/main';
import { ApolloProvider } from '@/app/providers/ApolloProvider';

export default async function Page() {
  return (
    <main>
      <ApolloProvider>
        <Main />
      </ApolloProvider>
    </main>
  );
}
