import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ element }) {
  const [isAuthorized, setIsAuthorized] = React.useState(false);
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authentificate.sign);

  React.useEffect(() => {
    if (auth) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
      navigate("/login");
    }
  }, [navigate, auth]);

  return isAuthorized ? element : null;
}

export default ProtectedRoute;
