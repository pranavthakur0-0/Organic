import { useState } from "react"
import "../Component/gallary.css"
import Img2 from "../Component/images/gallary2.jpeg"
import Img3 from "../Component/images/gallary3.jpeg"
import Img4 from "../Component/images/gallary4.jpeg"
import { AiOutlineCloseCircle } from "react-icons/ai";


function Gallary()
{
    let data = [
        {
            id: 1,
            imgSrc: Img2,
        },
        {
            id: 2,
            imgSrc: Img3,
        },
        {
            id: 3,
            imgSrc: Img4,
        },
        {
            id: 4,
            imgSrc: Img2,
        },
        {
            id: 5,
            imgSrc: Img3,
        },
        {
            id: 6,
            imgSrc: Img4,
        },
        {
            id: 7,
            imgSrc: Img2,
        },
        {
            id: 8,
            imgSrc: Img3,
        },
        {
            id: 9,
            imgSrc: Img4,
        },
        {
            id: 10,
            imgSrc: Img2,
        },
        {
            id: 11,
            imgSrc: Img3,
        },
        {
            id: 12,
            imgSrc: Img4,
        },
    ]

    const [model, setmodel] = useState(false);
    const [temp, settemp] = useState('');

    const getimg=(imgSrc)=>
    {
        settemp(imgSrc);
        setmodel(true);
    }
    


        return(
            <>

            <div className={model ? "model open"   : "model"}>
                <img src={temp} alt="" />
                <AiOutlineCloseCircle className="gallary-page-container-icon" onClick={()=>{setmodel(false)}} />

            </div>


            <div className="gallary-page-container-main-container">
                <div className="gallary-page-container-main-container-text">
                    Gallery
                </div>
            </div>

            <div className="gallary-page-container-space-container" />

            <div className="gallary-page-container-memories-container" >
                Our Beautiful Memories
                </div>

                <div className="gallary-page-container-main">


          <div className="gallary-page-container">
              {data.map((item, index)=>{
                  return (
                      <div className="gallary-page-container-image" key={index} onClick={()=>getimg(item.imgSrc)} >
                          <img src={item.imgSrc} style={{width :"100%"}} alt="" />

                      </div>
                  )
              })}
          </div>
          <div className="gallary-page-container-space-container" />
          </div>
            </>

        )
        
    }

export default Gallary;