import Register from "../pages/auth/Register";
import useAuth from "./useAuth";
export default function RequireAuthentication(WrappedComponent) {
  
  const {currentUser} = useAuth();
  
    return function(props) {   
      if (currentUser) {
        return <WrappedComponent {...props} />;
      }
  
      return <Register />;
    };
  }