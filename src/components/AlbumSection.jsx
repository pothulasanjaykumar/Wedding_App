import React from 'react';

const AlbumSection = () => (
  <div className="min-h-screen w-full flex flex-col justify-center items-center bg-cover bg-center" id='gallery' 
       style={{ 
         backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/042/375/541/non_2x/modern-shadow-overlay-great-design-for-any-purposes-blurred-soft-shadow-from-the-window-and-branches-of-plants-outside-the-window-natural-shadows-isolated-on-transparent-background-vector.jpg)'
       }}>
    <h1 className="text-3xl font-bold mb-8 text-black font-serif font-bold">Album</h1>
    
    <div className="h-[80vh] w-[95vw] rounded-[40px] flex justify-around items-center bg-cover bg-center"
         style={{ 
           backgroundImage: 'url(https://t3.ftcdn.net/jpg/03/69/42/70/360_F_369427047_EofVY4kFFgwdGEJUD5DLzQfkAvyP16I6.jpg)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)'
         }}>
      <div className="h-[75%] w-[35%] bg-cover bg-center rounded-lg"
           style={{ 
             backgroundImage: 'url(https://t4.ftcdn.net/jpg/07/31/57/83/360_F_731578370_gtV3KQUf39Gp44squvImaNCjbjsrIZzn.jpg)' 
           }}></div>
      
      <div className="h-[75%] w-[35%] bg-cover bg-center rounded-lg"
           style={{ 
             backgroundImage: 'url(https://cdn0.weddingwire.in/article/1510/original/1280/jpg/10151-indian-wedding-couple-images-photosynthesis-photography-services-best-indian-wedding-couple-images-revealed.jpeg)' 
           }}></div>
    </div>
  </div>
);

export default AlbumSection;