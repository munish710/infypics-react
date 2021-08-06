import React, { useContext, useState, useEffect } from "react";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const AppContext = React.createContext();

const getLocalStorage = () => {
  let localSavedImages = localStorage.getItem("saved");
  if (localSavedImages) {
    return JSON.parse(localSavedImages);
  } else {
    return [];
  }
};

function AppProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [reqExceeded, setReqExceeded] = useState(false);
  const [query, setQuery] = useState("");
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [savedImages, setSavedImages] = useState(getLocalStorage());

  const fetchImages = async () => {
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setReqExceeded(true);
      console.log("Fetch Error", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(() => 1);
    fetchImages();
  };

  const openImageViewer = (index) => {
    setShowImageViewer(true);
    console.log("Image", index);
    setCurrentImageIndex(index);
  };

  const removeSavedImage = (id) => {
    let newSavedImages = savedImages.filter((item) => item.id !== id);
    setSavedImages(newSavedImages);
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(savedImages));
  }, [savedImages]);

  return (
    <AppContext.Provider
      value={{
        query,
        handleSubmit,
        setQuery,
        photos,
        loading,
        showImageViewer,
        setShowImageViewer,
        openImageViewer,
        currentImageIndex,
        savedImages,
        setSavedImages,
        removeSavedImage,
        reqExceeded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };
