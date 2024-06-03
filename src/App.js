import "./App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "./redux/actions";
import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";
import NotFound from "./pages/NotFound";

function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;

  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios("/api/user")
      .then((res) =>
        dispatch({
          type: LOGIN,
          payload: res.data,
        })
      )
      .catch((err) => console.log(err))
      .finally(() => setLoaded(true));
  }, [dispatch]);

  return (
    <div>
      <NavComponent />
    </div>
  );

  // return (
  //   loaded && (
  //     <BrowserRouter>
  //       <NavComponent />
  //       <div className="container">
  //         <Routes>
  //           {/* rotte accessibili da tutti */}
  //           <Route path="" element={""} />

  //           {/* rotte accessibili solo se sei loggato */}
  //           <Route path="" element={""} />

  //           {/* rotte accessibili solo se NON sei loggato */}
  //           <Route path="" element={""} />

  //           <Route path="/404" element={<NotFound />} />
  //           <Route path="*" element={<Navigate to="/404" />} />
  //         </Routes>
  //       </div>

  //       <FooterComponent />
  //     </BrowserRouter>
  //   )
  // );
}

export default App;
