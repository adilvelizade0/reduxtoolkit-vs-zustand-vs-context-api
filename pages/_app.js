import { createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../src/redux/store";

export const AppContext = createContext();

const state = {
  count: 0,
  increment: () => {
    state.count++;

    return state.count;
  },
  decrement: () => {
    if (state.count > 0) {
      state.count--;

      return state.count;
    }
    return 0;
  },
  reset: () => {
    state.count = 0;
    return state.count;
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppContext.Provider value={state}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </Provider>
  );
}

export default MyApp;
