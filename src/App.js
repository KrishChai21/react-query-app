import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import CharacterList from "./components/CharacterList";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h1>Rick and Morty</h1>
        <div className="App">
          <CharacterList />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
