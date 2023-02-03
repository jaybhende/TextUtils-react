import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState("")
    // const [col,setcol] = useState("")

    // const style=()=>{
    //     if(document.style.backgroundColor='white'){
    //         style.backgroundColor = 'black';
    //     } 
    //     else{
    //         style.backgroundColor = 'white';
    //     }
    // }
     
    const handleonchange = (event) => {
        setText(event.target.value);

    }

    const uptext = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const tolower = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const clear = () => {
        let newtext = ('');
        setText(newtext);
    }

    // const char = ()=>{
    //     let count = 0;
    //     let len = text.length();
    //     for(let i=0;i<len;i++){
    //         if(text[i] === 'a'){count++;
    //     }}
    //     return count;    
    // }


    return (
        <>
            <section >
                <div>
                    <div className='flex  justify-around py-9'>
                        <p className='font-bold text-3xl'>Transform Your Text </p>
                    </div>
                    <div></div>
                    <div className='flex justify-around'>

                        <textarea name="" id="" cols="30" rows="10" className='flex border  border-slate-300 justify-evenly w-2/3 max-w-[1050px] text-lg py-3 px-5' value={text} onChange={handleonchange} placeholder='Enter your Text Here'></textarea>
                    </div>


                </div>

            </section>
            <section className='overflow-x-hidden my-6'>
                <div className='  '>
                    <div className='flex flex-row max-w-[900px] justify-between lg:mx-auto '>
                        <div>
                            <button className='pt-1 pb-2 px-2 border border-slate-400 bg-black text-white rounded-full ' onClick={uptext} >Uppercase</button>
                        </div>
                        <div>
                            <button className='pt-1 pb-2 px-2 border border-slate-400 bg-black text-white rounded-full ' onClick={tolower}>Lowercase</button>
                        </div>
                        <div>
                            <button className='pt-1 pb-2 px-3 border border-slate-400 bg-black text-white rounded-full 'onClick={clear}>Clear</button>
                        </div>
                        {/* <div><button></button></div> */}
                    </div>
                    <div></div>
                </div>
            </section>
            <section className=' my-6' >
                <div className='px-20'>
                    <p className='  text-3xl font-semibold text-'>Summary</p>
                    <p className='py-5 px-10'><span className='font-bold '>{text.split(" ").length-1}</span> Words and <span className='font-bold '>{text.length}</span>  Characters.</p>
                </div>
                <div className=' px-20 w-1/2'>
                    <p className='  text-3xl font-semibold text-'>Preview</p>
                    <p className='py-5 px-10 text-2xl font-base '>{text}</p>
                </div>
            </section>
        
            
        
        
        
        </>

    )
}
