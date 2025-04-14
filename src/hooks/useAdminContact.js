import { useSelector } from 'react-redux';

const useAdminContact = () => {
   let contactData = useSelector(state => state.AdminUi.Contact);

   console.log('contactData from redux 123', contactData);

   //    let dispatch = useDispatch();

   //    const Handle_Contact = async () => {
   //       try {
   //          if (!contactData) {
   //             const response = await axios.get(Admin_get_ContactData_EndPoint);
   //             console.log("response from api", response.data);
   //             dispatch(setContact(response.data));
   //          }
   //       } catch (error) {
   //          console.log(error);
   //       }
   //    };

   //    useEffect(() => {
   //       Handle_Contact();
   //    }, []);
};

export default useAdminContact;
