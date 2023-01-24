import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList ({galleryListProp, addLikesProp}) {
    
    return (
        <>
            <p>Gallery goes here</p>
            <ul>
                {galleryListProp.map(gallery => (
                    <GalleryItem galleryItemProp={gallery} addLikesProp={addLikesProp} />
                ))}
            </ul>
        </>
    );
}

export default GalleryList;