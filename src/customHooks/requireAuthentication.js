import { useSelector } from "react-redux";
import Login from "../pages/auth/Login";
import useAuth from "./useAuth";
export default function RequireAuthentication(WrappedComponent) {
  const {currentUser} = useAuth();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  // useEffect(() => {
  //   console.log(currentUser, "require auth", isLoggedIn)
  // }, [currentUser])
    return function(props) {
      
      if (currentUser && isLoggedIn) {
        return <WrappedComponent {...props} />;
      }
  
      return <Login />;
    };
  }