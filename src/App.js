import { Provider } from "react-redux";
import Main from "./pages/Main";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
