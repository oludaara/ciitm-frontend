import React, { memo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import AdminTemplate from '../../components/Templates/Admin/AdminTemplate';
import FormTemplate from '../../components/Templates/Admin/form/FormTemplate';
import AdminProfile_Title from '../../components/Molecules/Admin/Profile/AdminProfile_Title';
import ProfileInfo from '../../components/Molecules/Admin/Profile/ProfileInfo';
import Profile__Image__Container from '../../components/Molecules/Admin/Profile/Profile__Image__Container';
import { RiInstagramFill } from 'react-icons/ri';
import Social_Input from '../../components/Molecules/Admin/Profile/Social_Input';
import Social_info from '../../components/Molecules/Admin/Profile/Social_info';

const ProfilePage = memo(() => {
   const fileInputRef = useRef(null);
   const admin = useSelector(state => state.auth.user);
   const links = useSelector(state => state.socialLink.links);
   const [Image, setImage] = useState(admin.picture);

   let File_Profile_Controller = e => {
      const reader = new FileReader();

      reader.onload = () => {
         setImage(reader.result);
      };

      reader.onerror = () => {
         console.log('Error: ', reader.error);
      };

      console.log('image rendered', Image);
      reader.readAsDataURL(e.target.files[0]);
   };

   return (
      <AdminTemplate pageName='Profile'>
         <FormTemplate Navigator={false}>
            <AdminProfile_Title />
            <div className='flex flex-col h-[110vh] w-full mb-[5vh]'>
               <Profile__Image__Container
                  ImageUrl={Image}
                  AltImageUrl='https://png.pngtree.com/png-clipart/20230102/original/pngtree-business-man-avatar-png-image_8855195.png'
                  fileInputRef={fileInputRef}
               />

               <input
                  type='file'
                  name='Profile'
                  id='Profile'
                  className='hidden'
                  onChange={e => File_Profile_Controller(e)}
                  accept='image/webp, image/png, image/jpeg'
                  ref={fileInputRef}
               />

               <ProfileInfo admin={admin} />

               <Social_info link={links} />

               <div className="flex w-full items-center justify-center">

               <button className='bg-green-600 p-4 rounded-md text-white w-[20%]'>Save</button>

               </div>

            </div>
         </FormTemplate>
      </AdminTemplate>
   );
});

export default ProfilePage;
