import React, { Component} from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"

class ImgGallery extends Component {

    state = {
        currentImage:0,
        setCurrentImage:0,
        viewerIsOpen:false,
        setViewerIsOpen:false
    }

    openLightbox = (photo, index) => {
          this.setState({setCurrentImage:index})
          this.setState({currentImage:index.index})
          this.setState({viewerIsOpen:true});
    };
      
    closeLightbox = () => {
          this.setState({currentImage:0});
          this.setState({viewerIsOpen:false});
    };
    

  render(){

      return (
        <div>
        <Navbar />
        <div className="container">
        <h1>Image Gallery</h1>
          <Gallery photos={photos} onClick={this.openLightbox} />
          <ModalGateway>
            {this.state.viewerIsOpen ? (
              <Modal onClose={this.closeLightbox}>
                <Carousel
                  currentIndex={this.state.currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.label
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
          <Footer />
        </div>
      );
  }

}
export default ImgGallery;
