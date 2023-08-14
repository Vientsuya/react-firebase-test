import Auth from "./components/Auth";
import { db } from "./firebase.config.js";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";

function App() {
  const [movies, setMovies] = useState([]);

  const moviesRef = collection(db, "movies");

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await getDocs(moviesRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMovies(filteredData);
      } catch (err) {
        console.error(err);
      }
    }

    getMovies();
  }, []);

  return (
    <>
      <div className="w-screen h-screen bg-gray-100 flex flex-col justify-center items-center">
        <Auth />

        <div className="mt-4">
          {movies.map((movie) => (
            <div key={movie.id}>
              <h1>{movie.title}</h1>
              <p>{movie.releaseYear}</p>
              {movie.receivedAnOscar ? <p>🏆</p> : <p>😢</p>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
