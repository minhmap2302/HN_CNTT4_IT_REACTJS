import { Provider } from "react-redux";
import Profile from "./components/Profile";
import { store } from "./components/Reduct";


export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Profile></Profile>
      </Provider>
    </div>
  )
}
