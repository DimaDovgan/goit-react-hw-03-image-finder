import PropTypes from "prop-types";
import { ImageGalleryItem } from "./ImageGalleryItem"
import uniqid from 'uniqid'
import "../App.css"

export const ImageGallery =({galleryList,selected})=>{
    
   
        return < ul className = "ImageGallery" >{
            galleryList.map(({ id, webformatURL, largeImageURL }) => {
                return <ImageGalleryItem onClick={selected(largeImageURL)} key={uniqid()} id={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />
            })
        }
        </ul >
    
}
ImageGallery.propTypes = {
  galleryList: PropTypes.array.isRequired,
  selected: PropTypes.func.isRequired,
};