import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateToken } from "../../services/actions/updateTokenAction";
import { useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useLocation } from "react-router-dom";

function ProtectedRoute({ element, isAuth = false, allowReset = false }) {
  const location = useLocation();
  const [isAuthorized, setIsAuthorized] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authentificate.token);
  const [isLoading, setLoading] = React.useState(false);
  const recovery = useSelector((state) => state.authentificate.recovery);

  React.useEffect(() => {
    const updateAuth = async () => {
      const redirectPath = new URLSearchParams(location.search).get("redirect");
      

      if (auth) {
        setIsAuthorized(true);
        if (isAuth) {
          navigate(redirectPath || "/");
        }
      } else {
        setLoading(true);
        const result = await dispatch(updateToken());
        setLoading(false);
        if (result && result.success === true) {
          setIsAuthorized(true);
          if (isAuth) {
            navigate(redirectPath || "/");
          }
        } else if (!isAuth && !allowReset) {
          navigate(`/login?redirect=${location.pathname}`);
        } else if (allowReset && !recovery) {
          navigate("/forgot-password");
        }
      }
    };
    updateAuth();
  }, [navigate, auth, dispatch, location, isAuth, allowReset, recovery]);

  if (isLoading) {
    return <Loader />;
  }

  if (allowReset && !recovery) {
    return null; 
  }

  return isAuth || isAuthorized ? element : null;
}

export default ProtectedRoute;
