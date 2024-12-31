import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const clientId =
  "34178269140-eb4u8irv19bria7nrkbdpmotqh2c59n3.apps.googleusercontent.com";

export const GoogleOAuthLogin = () => {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    console.log("Login successful", res);
    const decode = jwtDecode(res?.credential);
    console.log(decode);
    localStorage.setItem("token", res?.credential);
    navigate("/");
  };

  const onFailure = (res) => {
    console.log("Login failed", res);
  };

  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin onSuccess={onSuccess} onFailure={onFailure} />
      </GoogleOAuthProvider>
    </div>
  );
};
