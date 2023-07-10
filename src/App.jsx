import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/home/Homepage";
import { Login } from "./pages/login/Login";
import { NotFound } from "./pages/NotFound";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  // console.log(import.meta.env.VITE_FIREBASE_KEY);

  // const currentUser = false;

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Homepage />
            </RequireAuth>
          }
        />
        <Route path="/login" Component={Login} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </>
  );
}

export default App;
