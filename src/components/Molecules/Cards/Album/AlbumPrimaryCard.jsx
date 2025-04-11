import { GoArrowUpRight } from 'react-icons/go';
import { MdDelete } from 'react-icons/md';

const AlbumPrimaryCard = ({
   image,
   title,
   date,
   isAdmin,
   onClickDelete,
   onClickViewUrl,
   containerClass = '',
   imageClass = '',
   titleClass = '',
   dateClass = '',
   dateFormat = 'DD-MM-YYYY',
   separator = '-',
}) => {
   const parsedDate = date?.split('T')[0];
   let formattedDate = '';

   if (parsedDate) {
      const [year, month, day] = parsedDate.split('-');
      switch (dateFormat) {
         case 'DD-MM-YYYY':
            formattedDate = [day, month, year].join(separator);
            break;
         case 'MM-DD-YYYY':
            formattedDate = [month, day, year].join(separator);
            break;
         case 'YYYY-MM-DD':
            formattedDate = [year, month, day].join(separator);
            break;
         default:
            formattedDate = parsedDate;
      }
   }

   const onClickView = () => {
      window.location.href = onClickViewUrl;
   };

   return (
      <div
         className={`relative rounded-lg overflow-hidden bg-black group cursor-pointer ${containerClass}`}
         onClick={() =>
            onClickView ? onClickView() : onClickViewUrl()
         }
      >
         <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover object-top transition-opacity duration-200 ${imageClass}`}
         />

         <div
            className='absolute z-10 top-2 right-2 bg-black bg-opacity-70 p-2 rounded-full hover:bg-opacity-100'
            onClick={e => {
               e.stopPropagation();
               onClickDelete?.(e);
            }}
         >
            {isAdmin ? (
               <MdDelete className='text-white text-lg' />
            ) : (
               <GoArrowUpRight className='text-white text-lg' />
            )}
         </div>

         <div className='absolute bottom-0 w-full px-4 py-2 bg-black bg-opacity-40 z-10 flex justify-between items-center'>
            <p className={`text-white font-semibold ${titleClass}`}>
               {title}
            </p>
            <p className={`text-white text-sm ${dateClass}`}>
               {formattedDate}
            </p>
         </div>
      </div>
   );
};

export default AlbumPrimaryCard;
