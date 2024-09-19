import profilePic from './assets/111.jpg'

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt = "profile picture" ></img>
            <h2> Nam  </h2>

        </div>
    );
}
export default Card