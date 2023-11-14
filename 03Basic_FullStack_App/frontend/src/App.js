import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  //making req to server as this comp loads
  // useEffect(() => {
  //   fetch("/api/jokes")
  //     .then((res) => {
  //       return res;
  //     })
  //     .then((data) => {
  //       setJokes(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  //making req using axios -- provides production grade things
  //whole error was here in recieving request on frontend
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data); // res.data -- was doing res
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let renderEle = jokes.map((joke) => {
    return <div key={joke.id}>{joke.Content}</div>;
  });

  return (
    <div>
      <h1>FrontEnd</h1>
      {jokes.length}
      {renderEle}
    </div>
  );
}

export default App;
