import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <ProgressBar animated now={45} />;
    }

    if(user?.email){
        return children;
    }
    return <Navigate to='/login' replace></Navigate>;
};

export default PrivateRoute;