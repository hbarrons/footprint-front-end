import { useLocation } from "react-router-dom";

const ProfileDetails = (props) => {
  let location = useLocation()

  console.log(location.state)

  return ( 
    <>
      <h1>Profile Details Here</h1>
    </>
   );
}
 
export default ProfileDetails;