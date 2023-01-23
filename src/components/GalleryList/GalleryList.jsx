import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList ({galleryListProp}) {

    return (
        <>
            <p>Gallery goes here</p>
            {/* <div class='galleryDisplay'> */}
            <ul>
                {galleryListProp.map(gallery => (
                //    <img src={gallery.path} class='galleryDisplay' />
                    <GalleryItem galleryItemProp={gallery} />
                ))}
            </ul>
            {/* </div> */}
        </>
    );
}

export default GalleryList;