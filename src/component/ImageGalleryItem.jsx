import "../App.css"
import PropTypes from "prop-types";
export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, onClick }) => {
  return <li className="ImageGalleryItem" onClick={onClick}>
  <img className="ImageGalleryItem-image" src={webformatURL} alt={id} />
</li>
}
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};