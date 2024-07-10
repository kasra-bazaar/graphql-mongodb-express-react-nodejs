import AddClientModal from "./components/AddClientModal";
import Clients from "./components/Clients";
import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

function App() {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          clients: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          projects: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  });

  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache,
  });

  return (
    <ApolloProvider client={client}>
      <Header />
      <AddClientModal />
      <Clients />
    </ApolloProvider>
  );
}

export default App;
