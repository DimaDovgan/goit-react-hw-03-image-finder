import "../App.css"
import { createPortal } from "react-dom"
import { Component } from "react"
import PropTypes from "prop-types";
const modalRoot=document.querySelector("#modal-root")
export class Modal extends Component  {
  static propTypes = {
      func: PropTypes.func.isRequired,
      img:PropTypes.string.isRequired,
    };
  componentDidMount() {
    window.addEventListener("keydown",this.hendelEscdown )
    
  }
  componentWillUnmount() {
    window.removeEventListener("click",this.hendelEscdown)
    
  }
  hendelEscdown = (e) => {
    if (e.code === "Escape") {
      this.props.func();
    }
  }
  hendleBackDrope = (e) => {
   if (e.currentTarget === e.target) {
        this.props.func();
      }
  }
  render() {
      return createPortal(<div className="Overlay" onClick={this.hendleBackDrope}>
        <div className="Modal">
            
    <img src={this.props.img} alt="img" />
  </div>
</div>,modalRoot)
    }
}