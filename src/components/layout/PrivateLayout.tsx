import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function PrivateLayout() {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const paramsObject = Object.fromEntries(params.entries());
    if (Object.keys(paramsObject).length === 0) {
      setParams({
        login: "false",
      });
      navigate("/public?login=false");
    } else if (paramsObject.login === "false") {
      navigate("/public?login=false");
    } else if (paramsObject.login === "true") {
      navigate("/private?login=true");
    }
  }, [params]);

  const logout = () => {
    setParams({
      login: "false",
    });
  };

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
