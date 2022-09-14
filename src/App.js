import "./App.css";
import Header from "./components/Header";
import ScrollBtn from "./components/ScrollBtn";
import Sidebar from "./components/Sidebar";
import VideoContainer from "./components/VideoContainer";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="max-w-6xl mx-auto flex justify-around">
          <Sidebar />
          <VideoContainer />
        </div>
      </div>
    </>
  );
}

export default App;
