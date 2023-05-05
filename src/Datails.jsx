import React from "react";
import { NavLink } from "react-router-dom";

const Datails = ({ data }) => {
  const img="https://static.tvmaze.com/uploads/images/medium_portrait/24/60454.jpg"
  return (
    <>
    <div>
      <h1 style={{ textAlign: "center", marginTop: "10vh" }}>
          ReactJS Developer Internship
        </h1>
    </div>
    <div className="containear">
      
      {data.map((item) => (
        
        // <>{item.show.image?item.show.image.medium:''}</>
        
        <div className="contaier-box">
          <div className="images">
            <img
              src={item.show.image?item.show.image.medium:img}
              alt="img"
              style={{ width: 200, height: 250 }}
            />
          </div>
          <div className="img_details">
          <h3 style={{color: 'brown'}}>{item.show.name}</h3>
          <p>{item.show.language}</p>
          <p>{item.show.status}</p>
          <NavLink to={`/imageDetails/${item.show.id}`}>
            <button className="btn">Show Details</button>
          </NavLink>
          </div>
        </div>
      ))}

      {/* <div className="contaier-box">
          <div className="images">
            <img
              src={}
              alt="img"
              style={{ width: 200,height:250 }}
            />
          </div>
          <p>Name of movie</p>
          <p>Language</p>
          <p>status</p>
          <NavLink to="/imageDetails">
            <button className="btn">Show Details</button>
          </NavLink>
        </div> */}

      {/* <div className="contaier-box">
          <div className="images">
            <img
              src="https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg"
              alt="img"
              style={{ width: 200,height:250}}
            />
          </div>
          <p>Name of movie</p>
          <p>Language</p>
          <NavLink to="/imageDetails">
            <button className="btn">Show Details</button>
          </NavLink>
        </div>
        <div className="contaier-box">
          <div className="images">
            <img
              src="https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg"
              alt="img"
              style={{ width: 200,height:250}}
            />
          </div>
          <p>Name of movie</p>
          <p>Language</p>
          <NavLink to="/imageDetails">
            <button className="btn">Show Details</button>
          </NavLink>
        </div>
        <div className="contaier-box">
          <div className="images">
            <img
              src="https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg"
              alt="img"
              style={{  width: 200,height:250}}
            />
          </div>
          <p>Name of movie</p>
          <p>Language</p>
          <NavLink to="/imageDetails">
            <button className="btn">Show Details</button>
          </NavLink>
        </div> */}
    </div>
    </>
  );
};

export default Datails;
