import { ToastContainer } from "react-toastify";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <ToastContainer hideProgressBar={true} />
      <HomePage />
    </div>
  );
}

export default App;
