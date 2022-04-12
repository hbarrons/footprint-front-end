import { Link } from "react-router-dom";


const ProfileCard = ({ profile }) => {
  return ( 
    <Link to={`/profiles/${profile.profile.id}`}>
      <div className="card">
        <h1 className="card-title">{profile.profile.name}</h1>
      </div>
    </Link>
   );
}
 
export default ProfileCard;