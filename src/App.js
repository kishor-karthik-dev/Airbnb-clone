import { useState ,useEffect} from "react";
import "./App.css";
// import { list, list2 } from "./assets/cards-list";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Axios from "axios";
function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [list, setList] = useState([]);
  useEffect(()=>{
    Axios.get('https://simple-backend-ekc3.onrender.com/gethotels')
    .then((res)=>{
      console.log(res.data);
      setList(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  })
  return (
    <div className="App">
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list} />}
      {/* <Cards list={list} /> */}
    </div>
  );
}

export default App;
