import "./App.css";
import Main from "./components/Main";
import SideBar from "./components/sideBar";
function App() {
  return (
    <div className="body flex">
      <SideBar />
      <main className="p-2 relative ml-[15%] w-[85%] h-screen">
        <Main />
      </main>
    </div>
  );
}

export default App;
