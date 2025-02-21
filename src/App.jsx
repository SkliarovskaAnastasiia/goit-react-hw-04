import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useState } from 'react';
import { getImagesByQuery } from './unsplash-api';
import toast, { Toaster } from 'react-hot-toast';

import SearchBar from './components/searchBar/SearchBar';
import ImageGallery from './components/imageGallery/ImageGallery';
import ErrorMessage from './components/error/ErrorMessage';
import Loader from './components/loader/Loader';
import LoadMoreBtn from './components/loadMoreBtn/LoadMoreBtn';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    try {
      setImages([]);
      setError(false);
      setLoader(true);

      const { results, total, total_pages } = await getImagesByQuery(
        query,
        page
      );

      if (total === 0) {
        toast('Nothing found', {
          duration: 3000,
          icon: <AiOutlineInfoCircle size={24} />,
        });
        setQuery('');
      } else {
        setImages(results);
      }

      if (total_pages === 1) {
        toast('End of collection', {
          duration: 3000,
          icon: <AiOutlineInfoCircle size={24} />,
        });
      } else {
        setLoadMoreBtn(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  const handleInputChange = e => {
    setQuery(e.target.value.trim());
    setPage(1);
  };

  const loadMoreImages = async () => {
    try {
      const nextPage = page + 1;
      setPage(nextPage);
      setLoadMoreBtn(false);
      setLoader(true);

      const { results, total_pages } = await getImagesByQuery(query, nextPage);
      setImages(prevImages => [...prevImages, ...results]);

      total_pages === nextPage
        ? toast('End of collection', {
            duration: 3000,
            icon: <AiOutlineInfoCircle size={24} />,
          })
        : setLoadMoreBtn(true);
    } catch {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <SearchBar
        onSubmit={fetchImages}
        value={query}
        onChange={handleInputChange}
      />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} />}
      {loadMoreBtn && images.length > 0 && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {loader && <Loader />}
      <Toaster />
    </>
  );
}

export default App;
