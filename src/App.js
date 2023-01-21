import ContactContextProvider from "./contexts/ContactContext";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="main">
      <ContactContextProvider>
        <ContactList />
      </ContactContextProvider>
    </div>
  );
}

export default App;
