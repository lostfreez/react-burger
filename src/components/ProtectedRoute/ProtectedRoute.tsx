import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../services/types/typedHooks";
import { updateToken } from "../../services/actions/updateTokenAction";
import { useAppDispatch } from "../../services/types/typedHooks";
import Loader from "../Loader/Loader";
import { useLocation } from "react-router-dom";
interface Props {
  isAuth?: boolean;
  allowReset?: boolean;
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({
  element,
  isAuth = false,
  allowReset = false,
}) => {
  const location = useLocation();
  const [isAuthorized, setIsAuthorized] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.authentificate.token);
  const [isLoading, setLoading] = React.useState(false);
  const recovery = useAppSelector((state) => state.authentificate.recovery);

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

  return isAuth || isAuthorized ? (element as React.ReactElement) : null;
};

export default ProtectedRoute;
