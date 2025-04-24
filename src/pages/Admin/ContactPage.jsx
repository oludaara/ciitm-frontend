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

const ContactPage = memo(() => {
   let dispatch = useDispatch();

   const contactDataFromRedux = useSelector(
      state => state.AdminUi.Contact,
   );

   console.log('contactData from redux 123', contactDataFromRedux);
   const [contactData, setContactData] = useState([]);

   const GetContactData = async () => {
      try {
         const res = await axios.get(Admin_get_ContactData_EndPoint);

         dispatch(setContact(res.data.data));
         setContactData(res.data.data);
      } catch (error) {
         Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message,
         });
      }
   };

   useEffect(() => {
      if (
         !contactDataFromRedux ||
         contactDataFromRedux.length === 0
      ) {
         GetContactData();
      } else {
         setContactData(contactDataFromRedux);
      }
   }, [contactDataFromRedux]);
   return (
      <AdminTemplate pageName='Contact Us'>
         <FormTemplate>
            <AdminContactTable_Title />
            <AdminContactData_Table Data={contactData} />
         </FormTemplate>
      </AdminTemplate>
   );
});

export default ContactPage;
