import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Circle_Image from '../../Atoms/Image/Circle_Image';
import P2 from '../../Atoms/Paragraph/P2';
import P3 from '../../Atoms/Paragraph/P3';

const defaultFallbackImg =
   'https://png.pngtree.com/png-clipart/20230102/original/pngtree-business-man-avatar-png-image_8855195.png';

const UserProfileCard = ({
   user = null,
   fallbackImage = defaultFallbackImg,
   containerClassName = 'p-[2vh] w-[25vw] h-[80%] bg-[#252323] rounded-lg flex items-center justify-center gap-[2vw] max-[1046px]:hidden',
   imgClassName = 'bg-red-500 h-[5vh] w-[5vh] rounded-full flex items-center justify-center',
   textClassName = 'text-white',
   showMenu = true,
}) => {
   const reduxUser = useSelector(state => state.auth.user);
   const actualUser = user || reduxUser;

   const [img, setImg] = useState('');

   useEffect(() => {
      if (actualUser?.picture) {
         setImg(actualUser.picture);
      }
   }, [actualUser]);

   const handleImageError = () => {
      setImg(fallbackImage);
   };

   return (
      <div className={containerClassName}>
         <div className={imgClassName}>
            <Circle_Image
               src={img}
               alt='Profile'
               fn={handleImageError}
            />
         </div>
         <div>
            <P3 Tailwind_utility_Class={textClassName}>
               {actualUser?.email || 'User Name'}
            </P3>
         </div>
         {showMenu && (
            <BsThreeDotsVertical className='text-white text-[2xl]' />
         )}
      </div>
   );
};

export default UserProfileCard;
