import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Skills from "../Skills/Skills";
// import Portfolio from "../Portfolio/Portfolio";
import Contacts from "../Contacts/Contscts";

function App() {


    return (
        <div className="wrapper">
            <div className="page">
                <div className="content">
                    <Header/>
                    <Main/>
                    <About/>
                    <Skills/>
                    {/*<Portfolio/>*/}
                    <Contacts/>
                </div>
            </div>
        </div>
    );
}

export default App;
