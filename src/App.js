import React from 'react';
import backgroundImage from './bg.jpg';
import {IoIosMenu} from 'react-icons/io'
import {IoDocumentsSharp} from 'react-icons/io5'
import {MdComputer} from 'react-icons/md'
import {BsRadioactive} from 'react-icons/bs'
import image from './phone.jpeg'
function App() {

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '50vh', 
    padding: '12px'
  };



  return (
    <div className="App">
     
     <div style={divStyle} className=' flex-row items-center justify-center p-4'>
        <nav>
         <div className='flex gap-3 relative'> <span className='text-white text-2xl p-1 ml-20 cursor-pointer'>Xe<b>One.</b></span><ul className='flex text-white gap-4 ml-40 ml-[550px] cursor-pointer'><li>Home</li><li>Features</li><li>Team</li><li>Portifolio</li><li>Packages</li><li>CLients</li><li>Blog</li><li>Contact</li><li></li> </ul><span className='text-white cursor-pointer'><IoIosMenu size={20} className=' absolute right-4'/></span></div>
        </nav>
        <div className='w-2/6 flex-col items-center justify-center p-4 m-auto mt-10'><span className='p-4'><h1 className='text-3xl text-blue-400 '>Next Big Thing</h1><b><h1 className='text-3xl text-blue-400 '>In One Page</h1></b></span><p className='text-white  p-1'>The best Multipurpose one page template in Market</p></div>
        <div className=' flex ml-64 items-center '>
      <div className='w-1/4 flex-row gap-4 p-4 bg-blue-500 h-64 p-4 mt-5 text-center items-center  justify-center text-white'>
        <IoDocumentsSharp className=' m-auto mt-4' size={30}/>
        <div className='m-10'><b><h1>Well Documented</h1></b>
        <p>This is photoshop's version Lorem ipsum.</p></div>
      </div>
      <div className='w-1/4 grid-flow-row gap-4 p-4 bg-violet-800 h-[300px]  text-center items-center justify-center text-white'>
        <MdComputer className=' m-auto mt-4' size={30}/>
        <div className='m-10'><b><h1>Well Documented</h1></b>
        <p>This is photoshop's version Lorem ipsum.</p></div>
      </div>
      <div className='w-1/4 grid-flow-row gap-4 p-4 bg-blue-500 h-64 p-12 mt-5 flex-row text-center items-center justify-center text-white'>
        <BsRadioactive className=' m-auto mt-4' size={30}/>
        <div className='m-10'><b><h1>Well Documented</h1></b>
        <p>This is photoshop's version Lorem ipsum.</p></div>
      </div>
      
     </div>
     <div className=' flex p-8 ml-72 '>
  <div className='flex-row w-1/2'>
  <b><p className='text-blue-500'>Service We Offer</p></b>
  <p className='text-3xl mb-6'>Awesome Features</p>
  <p className='text-gray-500'>
3d modeling means creating a digital model of the real physica object.
sketching we don't use rulers,compass or take care about units of measurements purpose of 3d concept
used in designing,gaming,animation,art,engineering  and anything involving visual communication
</p>
<button className='bg-violet-800 px-4 p-2 rounded-full text-white mt-10'>SEO Team</button>
  </div>
  <div> <img src={image} alt='' width={300} height={50}/></div>
  </div>
      </div>
 </div>
     
    
  );
}

export default App;
