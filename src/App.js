
import './App.css';
import { Component } from 'react';
import { Searchbar } from "./component/Searchbar.jsx"
import { ImageGallery } from "./component/image-gallery"
import { LoadMore } from "./component/loader-more.jsx"
import axios from "axios"
import { Loader } from "./component/Loader"
import { Modal } from "./component/modal"


class App extends Component {
  state = {
    seararchTitle: "",
    page: 1,
    galleryList: [],
    states: "idle",
    selectedImg:null
  }
  showModal = () => {
    this.setState({selectedImg:null})
  }
  selectedCard = (img) => {
    return () => {
      this.setState({selectedImg:img})
    }
  }
  
  inputSeararchTitle = (title) => {
  
    this.setState({ seararchTitle : title });
    
  }
  loadMore = () => {
        this.setState(prevState => {
    return { page: prevState.page + 1 };
  } );
  }
  
  async componentDidUpdate(prevProps, prevState) {

    if (prevState.seararchTitle !== this.state.seararchTitle && prevState.seararchTitle!=="") {
                this.setState({ galleryList: [] ,page:1})
    }
    
    if (prevState.seararchTitle !== this.state.seararchTitle || this.state.page!==prevState.page) {
        try {
          this.setState({ states: "pending" })
                const response = await axios(`https://pixabay.com/api/?q=${this.state.seararchTitle}&page=${this.state.page}&key=25723997-fd962a98215c24b806b0808d5&image_type=photo&orientation=horizontal&per_page=12`);
                const modeficationList = this.filterContent(response.data.hits);
                this.setState(prevState => {
                  const newArr = prevState.galleryList.concat(modeficationList);
                  if (modeficationList.length > 0)
                  { return { galleryList: newArr, states: "resolved" } }
                  else { return { states: "rejected"}};
                }
                    
                )}
      catch (error) {
        this.setState({ error ,states:"rejected"});
      }
      }
    }

  filterContent = (arr) => {
        return arr.map(({ id, webformatURL, largeImageURL }) => {
        return { id, webformatURL, largeImageURL }
        })
    }

  render() {

    return <div className='App'><Searchbar seararchTitle={this.inputSeararchTitle} />
      <ImageGallery galleryList={this.state.galleryList} selected={this.selectedCard}/>
      {this.state.states === "resolved" && <LoadMore onClick={this.loadMore} />}
      {this.state.states === "pending" && <Loader />}
      {this.state.selectedImg && <Modal img={this.state.selectedImg} func={ this.showModal}/>}

      
      
    </div>
  }
}

export default App;
