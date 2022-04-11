import { Link } from "react-router-dom";


const ProfileCard = ({ profile }) => {
  return ( 
    <Link to={`/profiles/${profile.profile.id}`} className="card">
      <h1>{profile.profile.name}</h1>
    </Link>
   );
}
 
export default ProfileCard;