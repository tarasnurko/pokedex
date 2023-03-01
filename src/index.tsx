import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import PokemonProvider from "./context/PokemonContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PokemonProvider>
        <App />
      </PokemonProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
