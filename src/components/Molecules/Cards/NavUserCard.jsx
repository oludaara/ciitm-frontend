import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Circle_Image from '../../Atoms/Image/Circle_Image';
import P2 from '../../Atoms/Paragraph/P2';
import { IoMdMenu } from 'react-icons/io';

const Nav_UserCard = () => {
   const [img, setImg] = useState('');
   const admin = useSelector(state => state.auth.user);

   const handleImageError = () => {
      console.log('handleImageError');
      setImg(
         'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20230102%2Foriginal%2Fpngtree-business-man-avatar-png-image_8855195.png&f=1&nofb=1&ipt=334549503cad3198057e39ffda4bfdb3d8c3709c5b262eb69f4c56f465dc11a5&ipo=images',
      );
      console.log('img', img);
   };

   useEffect(() => {
      if (admin) {
         setImg(admin.picture);
      }
   }, [admin]);

   console.log('Nav_UserCard');

   console.log('img', img);

   return (
      <div className='p-[1vh] w-[25vw] h-[80%] bg-[#252323] rounded-lg flex items-center justify-center gap-[2vw] max-[1046px]:hidden'>
         <div className='Circle_Container bg-red-500 h-[5vh] w-[5vh] rounded-full flex items-center justify-center'>
            <Circle_Image
               src={img}
               alt='Profile Picture'
               fn={handleImageError}
            />
         </div>
         <div className='text-white'>
            <P2 text={admin ? admin.email : 'notfound@gmail.com'} />
         </div>

         <BsThreeDotsVertical className='text-white text-[2xl]' />
      </div>
   );
};

export default Nav_UserCard;
