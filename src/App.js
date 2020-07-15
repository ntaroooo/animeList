import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Router} from 'react-router-dom';

import './App.css';
import TitlebarGridList from './component/animelistpage.jsx';
import Main from './component/mainpage.jsx';




class App extends Component {

 



  /*render(){   
    return (
      <div className="App">
        <BrowserRouter>

        <Left />
        <Title />
        </BrowserRouter>
      
      </div>
    );
  }*/

    render(){
      return(
        <BrowserRouter>
           


            <Route  exact path="/" component={Main} />
            <Route  path="/gridlist" component={TitlebarGridList} />
          
        </BrowserRouter>
      )
    }
}

/*const App = () => (
  <BrowserRouter >
    <div>
      <switch>


      <Route exact path="/" component={Home} />
      <Route  path="/battle" component={Battle} />
      </switch>
    </div>
  </BrowserRouter>
)*/

const Home = () => (
  
  <div className="App">
      
        <Left />
        <Title />
      
      
  </div>


)
/*const Left = () => {
  return(
    <div className="left">
      <div className="image">
        <Component1 />
      </div>
      
    </div>
  )
}*/

const Left = () => {
  return(
    <div className="left">
      
     
      
    </div>
  )
}

const Title = () => {
  return(
    <div className="title1">
      <h1>Anime researcher</h1>
      <Search />
      <Tagu />
      
      
    </div>
  )
}

const Tagu = () => {
  let items = [
    {"name": "Battle"},
    {"name": "Romantic"},
    {"name": "School Life"},
    {"name": "Robot"},
    {"name": "This term"},
    {"name": "My favorite"}
  ]
      return(
        <div className="tagu">
         
          {/*<BrowserRouter>
          <div className="list">
            <Link to="/battle">Battle</Link>
            <Route  path="/battle" component={Battle} />
            
            
            
          </div>
          </BrowserRouter>*/}
          
            <Link to = "/animelistpage">
              <button >Battle</button>
            </Link>
            <Route path="/animelistpage" component={TitlebarGridList}/>
          
          
          <div className="list">
            Romantic
          </div>
          <div className="list">
            School Life
          </div>
          <div className="list">
            Robot
          </div>
          <div className="list">
            This term
          </div>
          <div className="list">
            My favorite
          </div>
         
        </div>
      )
   /* return(
      <div className="tagu">
        <button>Battle</button>
      </div>
    )*/
 /* return(
    <div className="tagu">
      <BrowserRouter>
        <ul>
          <li><Link to='/battle'>Battle</Link></li>
          <li><Link to='/romantic'>Romantic</Link></li>
          <li><Link to='/school Life'>School Life</Link></li>
          <li><Link to='/robot'>Robot</Link></li>
          <li><Link to='/this term'>This term</Link></li>
          <li><Link to='/my favorite'>My favorite</Link></li>
        </ul>
        

      </BrowserRouter>
    </div>
  )*/
}

const Search = () => {
  return(
    <div className="search-bar">
      <input id="search-input" placeholder="please enter the keyword..." 
      type="text" name="search-key" />
      
    </div>
  )
}



export default App;
