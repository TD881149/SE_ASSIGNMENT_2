import logo from './logo.svg';
import './App.css';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import {
  BrowserRouter as Router,
  Route,
  Routes ,
} from "react-router-dom";
import News from './components/news';
import Home from './components/home';
import UpdateInfo from './components/updateinfo';
function App() {
  return (
    <div className="container">
        <Router>
          <div className="App">
          <Header/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/news' element={<News/>} />
          <Route path='/updateinfo' element={<UpdateInfo/>} />
          </Routes>
          </div>
        </Router>
        <Footer/>
      </div>
    //   <Routes>
    //   <Header/>
    //   <div className="content">
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/news" element={<News />} />
    //       </Routes>
    //     </div>
    //   <Footer/>
    //  </Routes>
  );
}

export default App;
