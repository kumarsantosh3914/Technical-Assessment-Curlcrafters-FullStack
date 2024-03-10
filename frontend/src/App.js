import { Provider } from "react-redux";
import "./App.css";
import UserInputForm from "./components/UserInputForm";
import appStore from "./utils/appStore";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <UserInputForm />
      </Provider>
    </div>
  );
}

export default App;
