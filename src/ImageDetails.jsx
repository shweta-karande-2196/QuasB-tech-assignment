import React from 'react'
import {useParams,NavLink } from 'react-router-dom'


const ImageDetails = ({data}) => {
  const img="https://static.tvmaze.com/uploads/images/medium_portrait/24/60454.jpg"

    const {id} = useParams();
    const details = data.filter((item)=>item.show.id == id);
    console.log(details);

  return (
    <>
    <NavLink to="/" style={{ textDecoration: "none"}}>
            <button className='backbtn'>back</button> 
         </NavLink>
    
        <div  className='productPage'>

                 

          {details.map(item=>(
            <div className='detailsContainer'>
            <div >
              <div>
            <img  src={item.show.image?item.show.image.medium:img}alt='img'  style={{ width: 400, height: 450 }}/>
            </div><br/>
          <div className='episode'>

          <a href={item.show._links ? item.show._links.self.href : '#'}>Next Episode</a>
           <a href={item.show._links ? item.show._links.previousepisode.href : '#'}>Previous Episode</a>

          </div>
          </div>
          <div className='otherDetails'>
          <h2>{item.show.name}</h2>
          <p>id : {item.show.id}</p>
             <p>Type: {item.show.type}</p>
             <p> Rating : {item.show.rating.average}*</p>
             <p>Genres :{item.show.genres}</p>
            {/* <a href={item.show.url} >Official Link</a> */}
            
            <summary> <b>Sumarry:</b> {item.show.summary}</summary>
           
          </div>
          </div>

          ))}
           
           
        </div>
        </>
    
  )
}

export default ImageDetails