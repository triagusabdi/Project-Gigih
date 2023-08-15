import { useState, Fragment } from 'react'
import './App.css'
import Header from './components/header';
import Body from './components/body';

import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Detail from './components/detail';


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState("");

  // const fetcher = async () => {
  //   const response = await fetch('http://localhost:3000/api/thumbnails');
  //   if(response.ok) {
  //     const data = await response.json();
  //     setData(data.thumbnails);
  //   }

  //   if(data === ""){
  //     fetcher();
  //   }
  // } 

  // const title1 = 'Most Played Song'
  // const user = 'Generasi Gigih'

  // const user2 = {
  //   name: 'Generasi Gigih',
  //   image: 'https://picsum.photos/500'
  // }


  // const most_played_songs = [{
  //   name: 'Judul Lagu',
  //   image: 'https://picsum.photos/500'
  // }]

  // const songs = [{
  //   name: 'Judul Lagu',
  //   image: 'https://picsum.photos/500'
  // }]

  // const mp_songs = [];
  // for (let i = 0; i < 5; i++) {
  //   mp_songs.push(<div key={i} className='mp-song'>{songs[0].name}</div>);
  // }

  // const songDivs = [];
  // for (let i = 0; i < 12; i++) {
  //   songDivs.push(
  //   <div key={i} className='song'>{songs[0].name}
  //     <button className='btn'>Tambah</button>
  //   </div>);
  // }

  return (
    <>
      <Header/>
      {/* <Body /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          
          {/* 
          <Route path="/listProduct" element={<ListProduct/>}/>
          <Route path="/addProduct" element={<AddProduct/>}/>
          <Route path="/listProduct/edit/:id" element={<EditProduct/>}/>

          <Route path="/listCategoryProduct" element={<ListCategoryProduct/>}/>
          <Route path="/addCategoryProduct" element={<AddCategoryProduct/>}/>
          <Route path="/listCategoryProduct/edit/:id" element={<EditCategoryProduct/>}/> */}

          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
