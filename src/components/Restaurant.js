import { comman_URL } from "../utils/constants";

const Restaurant = (props) => {
  const { resData } = props;
  // console.log(resData);

  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla } = resData.info;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-200">
      <div className="w-full h-56 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          alt="res-logo"
          src={comman_URL + cloudinaryImageId}
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <div className="flex justify-between items-center mt-2 text-sm font-semibold">
          <span className="text-yellow-600 ">⭐ {avgRating}</span>
          <span className="text-gray-700">{costForTwo}</span>
          <span className="text-xs text-gray-600 mt-1">{sla?.slaString}</span>
        </div>

        <h4 className="text-sm text-gray-700 truncate">
          {cuisines.join(", ")}
        </h4>
        
      </div>
    </div>
  );
};

  export const withPromotedLabel=(Restaurant)=>{
    return (props)=>{
      return(
        <div>
          <label> Promoted </label>
          <Restaurant {...props}/>
          </div>
      )
    }
  }



export default Restaurant;
