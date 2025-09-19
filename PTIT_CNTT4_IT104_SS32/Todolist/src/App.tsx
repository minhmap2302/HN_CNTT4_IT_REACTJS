import { Provider } from "react-redux";
import Todolist from "./components/Todolist";
import { store } from "./Store/store";


export default function App() {
  return (
    <Provider store={store}>
      <Todolist/>
    </Provider>
  )
}
