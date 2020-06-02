import React, { Component } from 'react';
import Button from './Components/Button/Button';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Searchbar from './Components/Searchbar/Searchbar';
import Loader from './Components/Loader/Loader';
import Pixaby from './Helpers/Pixaby';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    query: '',
    page: 1,
    value: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query) {
      this.getImages();
    }
    if (page > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  getImages = () => {
    const { query, page } = this.state;
    this.setState({ loading: true });

    Pixaby.getImagesWithQuery(query, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  scrollPage = async () => {
    await this.getImages();
  };

  onSubmitForm = query => {
    this.setState({
      query: query,
      page: 1,
      images: [],
    });
  };

  render() {
    const { images, loading, error } = this.state;
    return (
      <>
        <Searchbar onChangeQuery={this.onSubmitForm} />
        {images.length > 0 && <ImageGallery images={images} />}
        {loading && <Loader />}
        {error && <h1>Something bad happend</h1>}

        {images.length > 0 && !loading && <Button onClick={this.scrollPage} />}
      </>
    );
  }
}
