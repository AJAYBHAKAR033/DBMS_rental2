import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Commonlogin from './Pages/Common_login/Common_login.js'
import AdminLogin from './Pages/Admin_login/admin_login'
import OwnerLogin from './Pages/Owner_login/owner_login'
import ClientLogin from './Pages/Client_login/Client_login'
import AdminOptions from './Pages/Admin_options/admin_options'
import OwnerOptions from './Pages/Owner_options/owner_options'
import StaffAdd from './Pages/StaffAdd/StaffAdd'
import AddBranch from './Pages/BranchAdd/Add_Branch'
import Home from './Pages/Home/Home'
import Add_Client from './Pages/Add_Client/Add_Client'
import Add_owner from './Pages/Add_Owner/Add_Owner'
import Staff_login from './Pages/Staff_Login/Staf_Login'
import Owner_login_options from './Pages/Owner_login_options/Owner_login_options'
import Client_login_options from './Pages/Client_login_options/Client_login_options'
import Client_after_login_options from './Pages/ClientAfterLoginOption/client_after_login_option'
import QueryProperty from './Pages/Query_page/Query_page'
import Comments from './Pages/Comments/Comments'
import AllBranch from './Pages/AllBranch/AllBranch'
import AfterStaffLogin from './Pages/StaffAfterLoginController/staff_after_login_option'
import PropertyUnderStaff from './Pages/PropertyUnderStaff/PropertUnderStaff'
import ClientUnderStaff from './Pages/ClientUnderStaff/ClientUnderStaff'

import Add_Property from './Pages/Add_Property/Add_Property'
import Query from './Pages/Query_page/Query_page'
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/commonlogin" element={<Commonlogin />}></Route>
      <Route path="/adminlogin" element={<AdminLogin />}></Route>
      <Route path="/ownerlogin" element={<OwnerLogin />}></Route>
      <Route path="/clientlogin" element={<ClientLogin />}></Route>
      <Route path="/adminoptions" element={<AdminOptions />}></Route>
      <Route path="/owneroptions" element={<OwnerOptions />}></Route>
      <Route path="/staffadd" element={<StaffAdd />}></Route>
      <Route path="/branchadd" element={<AddBranch />}></Route>
      <Route path="/clientreg" element={<Add_Client />}></Route>
      <Route path="/ownerreg" element={<Add_owner />}></Route>
      <Route path="/stafflogin" element={<Staff_login />}></Route>
      <Route path="/ownerloginoption" element={<Owner_login_options />}></Route>
      <Route path="/clientloginoption" element={<Client_login_options />}></Route>
      <Route path="/propertyadd" element={<Add_Property />}></Route>
      <Route path="/clientAfterLogin" element={<Client_after_login_options/>}></Route>
      <Route path="/queryProperty" element={<QueryProperty/>}></Route>
      <Route path="/comments" element={<Comments/>}></Route>
      <Route path="/allbranch" element={<AllBranch/>}></Route>
      <Route path="/Query" element={<Query />}></Route>
      <Route path="/afterStaffLogin" element={<AfterStaffLogin />}></Route>
      <Route path="/propertyUnderStaff" element={<PropertyUnderStaff />}></Route>
      <Route path="/clientUnderStaff" element={<ClientUnderStaff />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
