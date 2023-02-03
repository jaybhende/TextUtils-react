import React,{useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
    const [text, settext] = useState('Enable Dark Mode')

    const [style, mystyle] = useState({
      color: 'black',
      backgroundColor: 'white',
    })
  
    const change = () => {
      if (style.color === 'white' && style.backgroundColor === 'black') {
        let convert = {
          color: 'black',
          backgroundColor: 'white',
  
        }
        mystyle(convert);
        settext('Enable Dark Mode');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
    else {
        let convert = {
            color: 'white',
            backgroundColor: 'black'
            
        }
        mystyle(convert);
        settext('Enable Light Mode');
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
      }
  
    }
  
      
    


    return (
       
        
        <section className="flex" style={style}>
            <nav className="flex w-full py-2 px-8  lg:mx-auto max-w-[1350px]">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex ">
                        <a href="/" className="mx-3 pt-2 pb-4 text-xl font-bold" alt=""> {props.siteName}</a>
                    </div>
                    <div className="flex ">
                        <div className="hidden lg:flex lg:flex-row ">
                            {/* <a href="/" className="mx-3 py-4 text-base font-semibold">VR Accessories</a> */}
                            <a href="/" className="mx-3 py-4 text-base font-semibold">Home</a>
                            <a href="/" className="mx-3 py-4 text-base font-semibold">Others</a>
                            <a href="/" className="mx-3 py-4 text-base font-semibold">Login</a>
                            <button onClick={change}>{text}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </section>



      
        
    )
}

Navbar.prototype = {
    siteName: PropTypes.string.isrequired
}

Navbar.defaultProps = {
    siteName: 'Set Site name'
};                    