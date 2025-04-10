import React from 'react';
import Admin_SideBar from '../../components/Organisms/SideBar/Admin_SideBar';
import Admin_NavBar from '../../components/Organisms/NavBar/AdminNavBar';
import Card_primary from '../../components/Molecules/Cards/PrimaryCard';

let cards = [
   {
      title: 'Total Earnings',
      value: '₹ 2,00,000',
      Image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F7%2FEarnings-PNG-Photos.png&f=1&nofb=1&ipt=ad88fa0a2ca54574a504e5e85647e951823044f1dcff1dea7c5330e2b9d31c8b&ipo=images',
   },
   {
      title: 'Total Students',
      value: '1000',
      Image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fpeople-40%2F48%2Fstudent_female-1024.png&f=1&nofb=1&ipt=2c290fd52eb56096e0a8b7477903f1c3e571ce54d3f5b0b0348cd0690e3cd860&ipo=images',
   },
   {
      title: 'Total Contacts',
      value: '100',
      Image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fcontact-app-icon%2Fcontact-app-icon-12.jpg&f=1&nofb=1&ipt=daa493d97f50c6e969952cdc2b9326de7208ad1fec51595bb4b0772bc4b0f746&ipo=images',
   },
   {
      title: 'Total Images',
      value: '110',
      Image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fdesignbolts%2Ffree-multimedia%2F1024%2FPhoto-icon.png&f=1&nofb=1&ipt=818a301a84053ec2a159e44cc251a64d1218f5d864ef8e2890328d132a74c3ea&ipo=images',
   },
];

const DashBoard = () => {
   return (
      <div className='bg-black w-screen h-[120vh] flex flex-col'>
         <div className='flex'>
            <Admin_NavBar text={'Home'} />
         </div>

         <div className='flex h-[110vh] w-screen'>
            <Admin_SideBar />

            <div className='Page1_right w-[75%] h-[110vh] flex flex-wrap'>
               <div className='w-full h-fit flex items-center justify-center max-[1300px]:mt-[15vh]'>
                  <div className='Card_Container flex gap-[2vw] w-full  max-[1300px]:items-center h-[32%] flex-wrap px-[3vw]'>
                     {cards.map((card, index) => (
                        <Card_primary
                           title={card.title}
                           value={card.value}
                           Image_Src={card.Image}
                        />
                     ))}
                  </div>
               </div>

               <div className='Quick_Action_Container'></div>
            </div>
         </div>
      </div>
   );
};

export default DashBoard;
