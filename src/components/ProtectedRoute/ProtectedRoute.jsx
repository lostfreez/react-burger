import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { authentificate } from "../../services/actions/actionsTypes";


function ProtectedRoute({ element }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authentificate.sign);

  React.useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      const authentificateAsync = async () => {
        await dispatch(authentificate());
      };
      authentificateAsync();
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate]);

  if (!auth) {
    return null;
  }
  return element;
}

export default ProtectedRoute;
