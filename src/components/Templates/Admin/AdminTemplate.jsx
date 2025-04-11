import Admin_NavBar from '../../Organisms/NavBar/Admin/AdminNavBar';

import Admin_SideBar from '../../Organisms/SideBar/Admin/Admin_SideBar';

const AdminTemplate = ({ children, pageName }) => (
   <div className='bg-black w-screen h-[120vh] flex flex-col'>
      <div className='flex'>
         <Admin_NavBar text={pageName} />
      </div>

      <div className='flex h-[110vh] w-screen'>
         <Admin_SideBar />

         <div className='Page1_right w-[75%] h-[110vh] flex flex-wrap'>
            <div className='w-full h-fit flex items-center justify-center max-[1300px]:mt-[15vh]'>
               {children}
            </div>
         </div>
      </div>
   </div>
);

export default AdminTemplate;
