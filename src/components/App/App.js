import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";

function App() {


    return (
        <div className="wrapper">
            <div className="page">
                <div className="content">
                    <Header/>
                    <Main/>
                    <About/>
                </div>
            </div>
        </div>
    );
}

export default App;
