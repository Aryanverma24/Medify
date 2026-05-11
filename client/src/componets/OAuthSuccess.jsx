import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const OAuthSuccess = () => {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const token = searchParams.get("token");
        if(token){
            localStorage.setItem("token", token);
            navigate("/home");
        } else {
            navigate("/auth/login");
        }

    }, []);

    return (
        <div className="h-screen flex items-center justify-center">
            Logging in...
        </div>
    );
};

export default OAuthSuccess;