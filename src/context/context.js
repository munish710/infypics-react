import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { useSnackbar } from "react-simple-snackbar";
import { options } from "../utils/options";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;
const apiUrl = "https://infypics-backend.herokuapp.com/api/v1/";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [reqExceeded, setReqExceeded] = useState(false);
  const [query, setQuery] = useState("");
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [savedImages, setSavedImages] = useState([]);

  const [openSnackbar] = useSnackbar(options);
  const { user, isAuthenticated } = useAuth0();

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
      //to handle search items not found
      if (data.results && data.results.length === 0) {
        setQuery("");
        setPage(2);
        openSnackbar("No Images found for your search!");
      }
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
    setCurrentImageIndex(index);
  };

  const removeSavedImage = async (id) => {
    try {
      const response = await axios.delete(
        `${apiUrl}posts/${id}?userEmail=${user.email}`
      );

      if (response.data.success) {
        setSavedImages(response.data.savedImages);
        openSnackbar("Image Removed Successfully");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const saveImageinDB = async (imageData) => {
    try {
      if (isAuthenticated) {
        const finalData = { ...imageData, userEmail: user.email };
        const response = await axios.post(`${apiUrl}posts`, finalData);

        if (response.data.success) {
          openSnackbar("Image Saved Successfully");
        }
      } else {
        openSnackbar("Please login to save images!");
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        openSnackbar(error.response.data.message);
      }
      console.log("Error", error);
    }
  };

  const getSavedImages = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}posts?userEmail=${user.email}`
      );
      if (response.data.success) {
        setSavedImages(response.data.savedImages);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const downloadImage = (imageUrl) => {
    axios({
      url: imageUrl,
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "image.jpg");
      document.body.appendChild(link);
      link.click();
    });
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
        removeSavedImage,
        reqExceeded,
        saveImageinDB,
        getSavedImages,
        downloadImage,
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
