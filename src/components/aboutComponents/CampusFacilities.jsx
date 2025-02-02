import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bulletPoint from '../../assets/images/bulletPoint.svg';
import { useSelector } from 'react-redux';
import { use } from 'react';

export let Facilites_Card = ({ Title, index }) => {
   return (
      <div
         className='Facilites_Card flex gap-3 w-full h-full'
         key={index}
      >
         <img
            src={bulletPoint}
            alt=''
            className='Facilites_Card_Image'
         />
         <h1 className='Facilites_Card_Title text-[1vw] max-[599px]:text-[4.6vw] font-medium'>
            {Title}
         </h1>
      </div>
   );
};

const CampusFacilities = () => {
   const [Facilities, setFacilities] = useState([]);
   const [Description, setDescription] = useState({});

   let About_Page_Data = useSelector(state => state.about.aboutPage);

   useEffect(() => {
      if (About_Page_Data) {
         setFacilities([...About_Page_Data.Facilities]);
         setDescription({
            ...About_Page_Data.Description,
         });
      }
   }, [About_Page_Data]);

   return (
      <section className='w-full h-full px-8 max-[599px]:px-6 py-12 bg-[#333] flex items-center justify-between gap-2 max-[599px]:gap-10 max-[599px]:flex-col'>
         <div className='Facilites_Card_Container left w-[17.5%] max-[599px]:w-full h-full bg-white p-4 max-[599px]:p-8 rounded-2xl max-[599px]:rounded-3xlxl'>
            <div className=' h-auto flex items-start justify-between flex-col gap-3.5 max-[599px]:gap-4'>
               {Facilities.map((Facility, index) => {
                  let title = Facility.title;
                  return (
                     <Facilites_Card
                        key={index}
                        Title={title}
                        index={index}
                     />
                  );
               })}
            </div>
         </div>
         <div className='right w-[82.5%] max-[599px]:w-full text-white px-8 max-[599px]:px-0 h-full flex items-start justify-between flex-col gap-6'>
            <div className='facilities'>
               <h1 className='text-[1.2vw] max-[599px]:text-[5vw] font-semibold font-[Montserrat] mb-2'>
                  Capmus and Faciities
               </h1>
               <p className='text-[0.9vw] max-[599px]:text-[3vw] w-[65%] max-[599px]:w-full'>
                  The University of the institute provides several
                  facilities to staff and students, which include
                  health, hostel, transport, library, sports and
                  various others.
               </p>
            </div>
            <div className='dynamic-links'>
               <div className='link flex gap-3'>
                  <img src={bulletPoint} alt='' />
                  <h1 className='text-[0.95vw] max-[599px]:text-[3.6vw]'>
                     Hostels
                  </h1>
               </div>
               <p className='text-[0.9vw] max-[599px]:text-[3vw] my-4 w-[60%] max-[599px]:w-full'>
                  There are twenty eight hostels including eleven
                  separate hostels for female students. The
                  residential accommodation in each of these hostels
                  comprises of cubicles and three-seat dormitories.
               </p>
            </div>
            <div className='discription w-full h-full flex max-[599px]:flex-col items-start justify-start gap-7'>
               <div className='img-container w-[10vw] max-[599px]:w-full h-[10vw] max-[599px]:h-[45vw] bg-[#FFE7E7] rounded-2xl overflow-hidden'>
                  <img
                     src={Description.image}
                     alt=''
                     className='w-full h-full object-cover'
                  />
               </div>
               <div className='headings w-[41vw] max-[599px]:w-full h-full flex items-start justify-between flex-col gap-2'>
                  <h1 className='text-[1.2vw] max-[599px]:text-[3.5vw] font-semibold'>
                     Description
                  </h1>
                  <p className='text-[0.9vw] max-[599px]:text-[3vw]'>
                     {Description.paragraph}
                  </p>
                  <div className='flex gap-4 text-[0.9vw] max-[599px]:text-[3.4vw]'>
                     <div className='heading-1 flex gap-3'>
                        <p className='text-[#FF6603] font-semibold'>
                           Per Month
                        </p>
                        <p>{Description.price}</p>
                     </div>
                     <div className='heading-2 flex gap-3'>
                        <p className='text-[#FF6603] font-semibold'>
                           Room
                        </p>
                        <p>{Description.room}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default CampusFacilities;
