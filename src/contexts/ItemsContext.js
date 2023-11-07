const { createContext, useReducer, useEffect, useContext } = require("react");

const BASE_URL = "http://localhost:3000";

const KotasContext = createContext();

const initialState = {
  kotas: [],
  isLoading: false,
  currentKota: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "kotas/loaded":
      return {
        ...state,
        isLoading: false,
        kotas: action.payload,
      };

    case "kota/loaded":
      return { ...state, isLoading: false, currentKota: action.payload };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown Error");
  }
}

function KotasProvider({ children }) {
  const [{ kotas, isLoading, currentKota, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function fetchKotas() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}/kotas`);
        const data = await res.json();
        dispatch({ type: "kotas/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading kotas...",
        });
      }
    }

    fetchKotas();
  }, []);

  return (
    <KotasContext.Provider value={{ kotas, isLoading, currentKota, error }}>
      {children}
    </KotasContext.Provider>
  );
}

function useKotas() {
  const context = useContext(KotasContext);
  if (context === undefined)
    throw new Error("Kotas context was outside the kotasProvider");

  return context;
}

export { KotasProvider, useKotas };
