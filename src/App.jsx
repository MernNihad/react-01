import React from 'react'
import "./app.css"
import Home from "./Home"
import About from './About'
import Logo from "./logo.svg"
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className='my-ui'>

            {/* <h1>Home</h1> */}
            <Header/>
            <Home/>
            <Main/>
            <Footer/>
        {/* </div> */}

      {/* <img src={Logo} alt="" />
        <About/>
      <Home/>
      <h1 className='' style={{color:"red",backgroundColor:"green"}}>halooo</h1>

      <About/>

     <img src="" alt="" />
     <div className=""></div>
     <About/> */}

     {/* 
     
     inline,
     css import,
     jsx,
     component - function , export
     user - import , first letter capp , <Html>

     */}
     {/* <br/>
     <div/>
     <About/> */}



    </div>
  )
}

export default App