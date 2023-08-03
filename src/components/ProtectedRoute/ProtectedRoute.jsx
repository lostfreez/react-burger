import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { authentificate } from "../../services/actions/actionsTypes";

function ProtectedRoute({ element }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authentificate.sign);
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      const authentificateAsync = async () => {
        setLoading(true);
        await dispatch(authentificate());
        setLoading(false);
      };
      authentificateAsync();
    }
  }, [dispatch]);

  if (loading) {
    return null; 
  }
  
  return auth ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;
