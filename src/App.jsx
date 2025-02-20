import { useState } from 'react';
import { getImagesByQuery } from './unsplash-api';
import { Toaster } from 'react-hot-toast';

import SearchBar from './components/searchBar/SearchBar';
import ImageGallery from './components/imageGallery/ImageGallery';
import ErrorMessage from './components/error/ErrorMessage';

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const fetchImages = async searchedQuery => {
    try {
      setImages([]);
      setError(false);
      setLoader(true);

      const { results } = await getImagesByQuery(searchedQuery);
      setImages(results);
      console.log(results);
    } catch {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={fetchImages} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} />}

      <Toaster />
    </>
  );
}

export default App;
