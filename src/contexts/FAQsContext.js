import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:3000";

const FAQsContext = createContext();

const initialState = {
  questions: [],
  isLoading: false,
  currentQuestion: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "questions/loaded":
      return { ...state, isLoading: false, questions: action.payload };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown error");
  }
}

function FAQsProvider({ children }) {
  const [{ questions, isLoading, currentQuestion, error }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchQuestions() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}/questions`);
        const data = await res.json();
        dispatch({ type: "questions/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading questions",
        });
      }
    }
    fetchQuestions();
  }, []);

  return (
    <FAQsContext.Provider
      value={{ questions, isLoading, currentQuestion, error }}
    >
      {children}
    </FAQsContext.Provider>
  );
}

function useFAQs() {
  const context = useContext(FAQsContext);
  if (context === undefined) {
    throw new Error("FAQs contexr was outside the FAQs provider");
  }
  return context;
}

export { FAQsProvider, useFAQs };
