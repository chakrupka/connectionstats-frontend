import { useSelector } from "react-redux";
import GuestHome from "./screens/Home/GuestHome";
import UserHome from "./screens/Home/UserHome";

const App = () => {
  const user = useSelector((state) => state.user);
  return user ? <UserHome /> : <GuestHome />;
};

export default App;
