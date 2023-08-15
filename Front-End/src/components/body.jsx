import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Body() {

  const [thumbnail, setThumbnails] = useState([]);
  
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:3000/api/thumbnails");
    setThumbnails(response.data);
  };
  

  return (
    <div className="body">
      <div className="thumbnail-container">
        {thumbnail.map(thumbnail => (
          <div className="thumbnail" key={thumbnail._id}>
            <Link to={`/detail/${thumbnail._id}`} state={{ imageUrl: thumbnail.url_video }}>
              <img src={thumbnail.url_image} alt={`Thumbnail ${thumbnail._id}`} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;