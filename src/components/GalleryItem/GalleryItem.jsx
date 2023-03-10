import React, { useState } from 'react';
import './GalleryItem.css';


function GalleryItem({addLikesProp, galleryItemProp}){

const [imageSwap, setImageSwap] = useState(true);

    if (!imageSwap){
        return(
            <>
                <p>{galleryItemProp.description}</p>
                <button onClick={() => setImageSwap(!imageSwap)}>View Photo Again</button>
            </>
        )} else {
        return(
            <>
                <div className="photoSection">                    
                    <img src={galleryItemProp.path} className="galleryGrid" onClick={() => setImageSwap(!imageSwap)} />
                    <br /><button onClick={() => addLikesProp(galleryItemProp.id)}>Like!</button>
                    <p># of Likes: {galleryItemProp.likes}</p>
                </div>
            </>
        )}}

export default GalleryItem;