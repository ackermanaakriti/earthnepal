import React,{useState} from 'react'

import ModalVideo from 'react-modal-video';



const videos = [
    {
      url: './images/nature.mp4',
      title: 'Video 1',
      thumbnail: 'https://www.example.com/thumbnail1.jpg',
    },
    {
      url: '/images/nature.mp4',
      title: 'Video 2',
      thumbnail: 'https://www.example.com/thumbnail2.jpg',
    },
    {
        url: '/images/nature.mp4',
        title: 'Video 2',
        thumbnail: 'https://www.example.com/thumbnail2.jpg',
      },
    // Add more videos as needed
  ];
  

const VideoGalleryy = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [videoId, setVideoId] = useState('');
  
    const openModal = (id) => {
      setIsOpen(true);
      setVideoId(id);
    };
  
    const closeModal = () => {
      setIsOpen(false);
      setVideoId('');
    };
  return (
   <>
   <div className='bg-bgGray py-[50px] videoGallery'>
    <div className='container m-auto'>
        <div className=''>
        <h2 className='text-textC font-nunito text-[30px] font-semibold'>Video Gallery</h2>
            <p className='text-hueBlue font-nunito text-[16px] font-semibold'>View Our Moments captured in pixels, stories told in frames.</p>
        </div>
        
    
       
    
    
        <div className='modalvideo'>
            
      <div  onClick={() => openModal('video1')}>
        <img src="thumbnail1.jpg" alt="Video Thumbnail" />
      </div>
      <div onClick={() => openModal('video2')}>
        <img src="thumbnail2.jpg" alt="Video Thumbnail" />
      </div>
      {/* Add more video thumbnails here */}
      
      <ModalVideo
       
        isOpen={isOpen}
        videoId={videoId}
        onClose={closeModal}
       
      />
    </div>
    </div>
   </div>
   </>
  )
}

export default VideoGalleryy