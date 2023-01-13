import Login from "../pages/auth/Login";
import useAuth from "./useAuth";
export default function RequireAuthentication(WrappedComponent) {
    return function(props) {
      const {currentUser} = useAuth();
      if (currentUser) {
        return <WrappedComponent {...props} />;
      }
  
      return <Login />;
    };
  }