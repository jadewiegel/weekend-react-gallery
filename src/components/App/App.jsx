import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';


// function GalleryList() {
  function App() {
    let [galleryList, setGalleryList] = useState([]);

    

    const getGallery = () => {
    
      axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      setGalleryList(response.data);
      console.log(response.data);
    }).catch((err) => {
      console.log(err);
    })
  }

    useEffect(() => {
      console.log('in useEffect')
      getGallery();
    }, [])

      return (

        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Gallery of My Life</h1>
          </header>
          {/* <p>Gallery goes here</p> */}
          <GalleryList galleryListProp={galleryList} />
        </div>
      );
    }

export default App;
