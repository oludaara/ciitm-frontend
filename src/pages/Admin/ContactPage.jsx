import { memo, useEffect, useState } from 'react';

import AdminTemplate from '../../components/Templates/Admin/AdminTemplate';
import FormTemplate from '../../components/Templates/Admin/form/FormTemplate';
import AdminContactTable_Title from '../../components/Organisms/Admin/AdminContactTable_Title';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Admin_get_ContactData_EndPoint } from '../../utils/constants';
import { setContact } from '../../store/AdminUi';
import Swal from 'sweetalert2';
import AdminContactData_Table from '../../components/Organisms/Admin/AdminContactData_Table';
import { setNavigator } from '../../store/NavigatorSlice';

const ContactPage = memo(() => {
   let dispatch = useDispatch();

   const contactDataFromRedux = useSelector(
      state => state.AdminUi.Contact,
   );

   let Navigator = useSelector(state => state.Navigator.navigator);

   let findNavigator = Navigator.find(
      item => item.pageName === 'Contact',
   );

   console.log('findNavigator', findNavigator);

   const [Message, setMessage] = useState('');
   const [isLoading, setIsLoading] = useState(true);
   const [isError, setIsError] = useState(false);
   
   const [contactData, setContactData] = useState([]);
   const [StartIndex, setStartIndex] = useState(contactData.length -1)

   const GetContactData = async () => {
      try {
         setIsError(false);
         const res = await axios.get(
            Admin_get_ContactData_EndPoint +
               `?perPage=${findNavigator.parPage}&limit=${findNavigator.limit}`,
         );

         

         setContactData(res.data.data);

      

         dispatch(setContact(res.data.data));
      } catch (error) {
         setIsError(true);
         setMessage(error.response.data.message);
         setIsLoading(false);
      }
   };

   useEffect(() => {
      GetContactData();
   }, [findNavigator.limit, findNavigator.parPage]);

   return (
      <AdminTemplate pageName='Contact Us'>
         <FormTemplate PageName='Contact'>
            <AdminContactTable_Title />

            <p className='text-red-500 text-center w-full text-[1.1vw]'>
               {Message}
            </p>

            {!isError && (
               <AdminContactData_Table
                  Data={contactData}
                  isLoading={isLoading}
                  StartIndex={(2 - 1) * 10} 
               />
            )}
         </FormTemplate>
      </AdminTemplate>
   );
});

export default ContactPage;
