import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList ({galleryListProp, addLikesProp}) {
    
    return (
        <>
            <p>Gallery goes here</p>
            <div className="galleryDisplay">
            
                {galleryListProp.map(gallery => (
                    <GalleryItem galleryItemProp={gallery} addLikesProp={addLikesProp} />
                ))}
            
            </div>
        </>
    );
}

export default GalleryList;