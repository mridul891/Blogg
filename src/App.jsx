import { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./component";
import { Outlet } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <div className="min-h-screen flex flex-wrap">
      <div className="w-full flex flex-col justify-between">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
