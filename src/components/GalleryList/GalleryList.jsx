import './GalleryList.css'

function GalleryList ({galleryListProp}) {

    return (
        <>
            <p>Gallery goes here</p>
            <div class='galleryDisplay'>
            <ul>
                {galleryListProp.map(gallery => (
                   <img src={gallery.path} />
                ))}
            </ul>
            </div>
        </>
    );
}

export default GalleryList;