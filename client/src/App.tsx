
import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

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
      <BrowserRouter>
        <Header />
        <div className=" container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
       
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
