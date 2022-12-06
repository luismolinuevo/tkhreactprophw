import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

let sampleData = [
  {
    thumbnailImg: "https://via.placeholder.com/600x400",
    videoTitle: "He did WHAT?!?! (My intial reaction)",
    videoUploader: "MaxTongster",
    dateVideoUploaded: "10-31-2022",
    videoViews: 10
  },
  {
    thumbnailImg: "https://via.placeholder.com/600x400",
    videoTitle: "I bought my best friend a Tesla (EMOTIONAL)",
    videoUploader: "Dave Doughbrick",
    dateVideoUploaded: "11-02-2022",
    videoViews: 300000
  },
  {
    thumbnailImg: "https://via.placeholder.com/600x400",
    videoTitle: "React in 100 seconds",
    videoUploader: "Fireship",
    dateVideoUploaded: "2022-09-08",
    videoViews: 255
  }
];
//youtube component
function YoutubeComponent(props){
  return (
    <div className="container">
      <img src={props.thumbnailImg} />
      <div className="content">
        <p>{props.videoTitle}</p>
        <p>{props.uploader}</p>
        <p>{props.videoUploaded}</p>
        <p>{props.views}</p>
      </div>
    </div>
  )
}

//App component
function App() {
  // return (
  //   <div className="app-container">
  //     <YoutubeComponent 
  //       thumbnailImg="https://via.placeholder.com/600x400" 
  //       videoTitle="How to make a taco"
  //       uploader="CookingFoods"
  //       videoUploaded="11/28/2022"
  //       views="167434343"
  //     />

  //   </div>
  // )

    return (
    <div className="app-container">
      {sampleData.map(element => (
        <div>
          <YoutubeComponent 
            thumbnailImg = {element.thumbnailImg}
            videoTitle = {element.videoTitle}
            uploader = {element.videoUploader}
            videoUploaded = {element.dateVideoUploaded}
            views = {element.videoViews}
          />
          
        </div>
      ))
      }

    </div>
  )

}

export default App
