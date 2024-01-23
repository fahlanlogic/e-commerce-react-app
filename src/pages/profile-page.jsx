import { useLogin } from "../components/hooks/useLogin";
import Navbar from "../components/layout/navbar";

const ProfilePage = () => {
  const username = useLogin()
  return (
    <div>
      <Navbar />
      <h1>Profile</h1>
      <p>
        Username : {username}
      </p>
    </div>
  )
}

export default ProfilePage;