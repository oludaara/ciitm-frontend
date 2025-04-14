import { memo, useEffect, useState } from 'react';
import AdminTemplate from '../../components/Templates/Admin/AdminTemplate';
import TableRow from '../../components/Atoms/Table/Tr/TableRow';
import TableHeading from '../../components/Atoms/Table/Th/TableHeading';
import TableData from '../../components/Atoms/Table/Td/TableData';
import FormTemplate from '../../components/Templates/Admin/form/FormTemplate';
import TableRow_Heading from '../../components/Molecules/table/TableRow_Heading';
import TableRow_Data from '../../components/Molecules/table/TableRow_Data';
import AdminContactTable_Title from '../../components/Organisms/Admin/AdminContactTable_Title';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Admin_get_ContactData_EndPoint } from '../../utils/constants';
import { setContact } from '../../store/AdminUi';
import Swal from 'sweetalert2';
import AdminContactData_Table from '../../components/Organisms/Admin/AdminContactData_Table';

const ContactPage = memo(() => {
   const contactDataFromRedux = useSelector(
      state => state.AdminUi.Contact,
   );

   let dispatch = useDispatch();
   console.log('contactData from redux 123', contactDataFromRedux);
   const [contactData, setContactData] = useState([]);

   const GetContactData = async () => {
      try {
         const res = await axios.get(Admin_get_ContactData_EndPoint);
         console.log('response from api', res.data);

         dispatch(setContact(res.data));
         setContactData(...res.data);
         console.log('Contact data:', contactData);
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
            {console.log('contact data 123', contactData)}
            <AdminContactData_Table Data={contactData} />
         </FormTemplate>
      </AdminTemplate>
   );
});

export default ContactPage;
