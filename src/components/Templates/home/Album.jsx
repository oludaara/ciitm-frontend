import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { GoArrowUpRight } from 'react-icons/go';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAlbum from '../../../hooks/useAlbum';
import { Remove_One_Album } from '../../../store/homeSlice';

const Album = () => {
   const [albums, setAlbums] = useState([]);
   const [error, setError] = useState(false);
   const [userRole, setUserRole] = useState('');
   const [isClick, setIsClick] = useState(false);

   const dispatch = useDispatch();
   const user = useSelector(state => state.auth.user);
   const album = useSelector(state => state.home.Album);

   useAlbum();

   useEffect(() => {
      if (album) {
         setAlbums([...album]);
      }
   }, [album]);

   useEffect(() => {
      if (user) {
         setUserRole(user.role);
      }
   }, [user]);

   const handleAlbumDelete = async (e, albumItem) => {
      try {
         e.preventDefault();
         e.stopPropagation();

         if (userRole === 'admin') {
            dispatch(Remove_One_Album({ _id: albumItem._id }));
            await axios.delete(
               `/api/admin/delete/albums/${albumItem._id}`,
            );
         } else {
            window.location.href = `/album/${albumItem.aName}`;
         }
      } catch (err) {
         console.error('Error:', err);
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err?.response?.data || 'Something went wrong!',
         });
      }
   };

   return (
      <div className='w-full h-auto md:h-screen px-[3vw] py-5 flex items-center justify-between flex-col md:flex-row'>
         <div className='md:w-[55vw] md:h-[62vh] w-full sm:h-full grid grid-rows-2 grid-cols-2 md:grid-cols-3 gap-[3vw] md:gap-[1.5vw] place-items-center'>
            {error ? (
               <h1 className='text-2xl text-center'>
                  No Data From Backend
               </h1>
            ) : albums.length === 0 ? (
               <h1 className='text-2xl text-center'>
                  Album Not Found
               </h1>
            ) : (
               albums.map(item => (
                  <Link
                     key={item._id}
                     to={`/album/${item.aName}`}
                     className='h-[40vw] w-full md:h-full rounded-lg overflow-hidden relative m-[3vw]'
                  >
                     <div className='h-full w-full bg-zinc-500 absolute top-0 left-0 bg-cover bg-center'>
                        <img
                           src={item.aImage_url}
                           alt={item.aName}
                           className='w-full h-full object-cover object-top'
                        />
                     </div>

                     <div
                        className='delete-btn flex justify-center p-1.5 items-center rounded-full max-[528px]:w-[8vw] max-[528px]:h-[8vw] md:w-[2.5vw] md:h-[2.5vw] bg-black absolute z-40 right-1 top-1 my-2 mx-2'
                        onClick={e => handleAlbumDelete(e, item)}
                     >
                        {userRole === 'admin' ? (
                           <MdDelete className='text-2xl text-white' />
                        ) : (
                           <GoArrowUpRight className='text-2xl text-white' />
                        )}
                     </div>

                     <div className='absolute bottom-0 left-0 bg-black bg-opacity-20 flex justify-between h-[20%] items-center px-4 w-full z-40'>
                        <p className='text-[2vw] md:text-[1vw] text-white font-semibold'>
                           {item.aName}
                        </p>
                        <p className='text-[2.3vw] md:text-[1vw] text-white'>
                           {item.createdAt.split('T')[0]}
                        </p>
                     </div>
                  </Link>
               ))
            )}
         </div>

         <div className='bg-red-600 h-[63vh] w-full md:w-[35vw] mr-[1vw] md:mr-[2vw] rounded-lg relative'>
            {albums.length > 0 && (
               <>
                  <Link
                     to={`/album/${albums[albums.length - 1]?.aName}`}
                     className='rounded-lg w-[80%]'
                     onClick={e => isClick && e.preventDefault()}
                  >
                     <img
                        srcSet={albums[albums.length - 1]?.aImage_url}
                        alt={
                           albums[albums.length - 1]?.aName ||
                           'Album Preview'
                        }
                        className='w-full h-full object-cover rounded-lg object-top'
                     />
                     <div className='flex justify-center p-1.5 items-center rounded-full max-[528px]:w-[8vw] max-[528px]:h-[8vw] md:w-[2.5vw] md:h-[2.5vw] bg-black absolute z-40 right-1 top-1 my-2 mx-2'>
                        <GoArrowUpRight className='text-2xl text-white' />
                     </div>
                     <div className='absolute bottom-0 right-0 bg-black bg-opacity-40 flex justify-between h-[25%] items-center px-4 w-full z-40'>
                        <p className='text-lg md:text-base text-white'>
                           {albums[albums.length - 1]?.aName}
                        </p>
                        <p className='text-lg md:text-base text-white'>
                           {
                              albums[
                                 albums.length - 1
                              ]?.createdAt.split('T')[0]
                           }
                        </p>
                     </div>
                  </Link>
               </>
            )}
         </div>
      </div>
   );
};

export default Album;
