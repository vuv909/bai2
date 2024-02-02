import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function PublicLayout() {
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

  const login = () => {
    setParams({
      login: "true",
    });
  };

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
}
