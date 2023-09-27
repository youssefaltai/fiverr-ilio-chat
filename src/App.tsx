import "./App.css";
import { useEffect } from "react";
import { useAppDispatch } from "./features/hooks";
import { setDimensions } from "./features/dimensions.slice";
import PublicRoutes from "./PublicRoutes";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  // scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleWindowResize = () => {
      dispatch(
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
      );
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <>
      <PublicRoutes />
    </>
  );
}

export default App;
