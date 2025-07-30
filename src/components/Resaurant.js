import { comman_URL } from "../utils/constants";

const Restaurant = (props) => {
  const { resData } = props;
  // console.log(resData);
  
  const {
  name,
  cuisines,
  costForTwo,
  avgRating,
  cloudinaryImageId,
  sla
} = resData.info;

 return (
  <div className="res-card">
    <img
      className="res-logo"
      alt="res-logo"
      src={comman_URL + cloudinaryImageId}
    />
    <h3>{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{avgRating} Stars</h4>
    <h4>{costForTwo}</h4>
    <h4>{sla?.slaString} </h4>
  </div>
);
};

export default Restaurant;