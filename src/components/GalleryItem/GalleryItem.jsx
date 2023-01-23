import './GalleryItem.css';

function GalleryItem(props){
    return(
        <>
            <div>
               <img src={props.galleryItemProp.path} class='galleryDisplay' />
            </div>
        </>
    )
}

export default GalleryItem;