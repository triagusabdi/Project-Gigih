import React, { useState, useEffect } from 'react';
import { useParams, useLocation  } from 'react-router-dom';
import axios from 'axios'; 

function Detail() {
  const { id } = useParams();
  const location = useLocation();

  const [imageUrl, setImageUrl] = useState('')
  const [thumbnail, setThumbnail] = useState({});
  const [product, setProducts] = useState([]);
  const [comment, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    username: '',
    comment: '',
  });

  useEffect(() => {
    getProducts(id);
    getComments(id);
  }, [id]);

  const getProducts = async (id_thumbnail) => {
    const response = await axios.get(`http://localhost:3000/api/product/${id_thumbnail}`);
    setProducts(response.data);
    setImageUrl(location.state.imageUrl);
    
    const imageUrl = location.state.imageUrl;
    console.log('Image URL:', imageUrl);
  };

  const getComments = async (id_thumbnail) => {
    const response = await axios.get(`http://localhost:3000/api/comment/${id_thumbnail}`);
    setComments(response.data);
  };

  const handleCommentChange = event => {
    const { name, value } = event.target;
    setNewComment(prevComment => ({
      ...prevComment,
      [name]: value,
    }));
  };

  const handleSubmitComment = async event => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/comment', {
        username: newComment.username,
        comment: newComment.comment,
        id_thumbnail: id,
      });
      setNewComment({ username: '', comment: '' });
      getComments();
      window.location.reload();
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div className="detail">
      <div className="product-section">
        <h2>Products</h2>
        <ul>
          {product.map(product => (
            <div className='product-list'>
                <li key={product._id}><img src={product.url_product} style={{ maxWidth: "200px", width: "200px" }} alt="" className="card-img-top" /></li>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
            </div>
          ))}
        </ul>
      </div>
      <div className="video-section">
        <h2>Video</h2>
        
        <iframe key={thumbnail._id}
          title="YouTube Video"
          width="560"
          height="315"
          src={imageUrl}
          frameBorder="50"
          allowFullScreen
        ></iframe>
      </div>
      <div className="comments-section">
        <h2>Comments</h2>
        <ul>
          {comment.map(comment => (
            <li key={comment._id}>
              <strong>{comment.username}:</strong> {comment.comment}
            </li>
          ))}
        </ul>
        <div className="comment-input">
          <input
            style={{ height:"30px", width:"200px",marginBottom:"10px", borderRadius:"10px"}}
            type="text" 
            placeholder="Username" 
            name='username'
            value= {newComment.username} 
            onChange={handleCommentChange}/>
        <textarea
            style={{ height:"50px", width:"200px", borderRadius:"10px"}}
            placeholder="Comment" 
            value={newComment.comment}
            name='comment'
            onChange={handleCommentChange}></textarea>
          <button onClick={handleSubmitComment} className="button">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
