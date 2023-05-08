import "./AdminCarDrivePage.scss";
import AdminPanel from "../../../components/adminPanel/AdminPanel";
import CarDrivePage from "../../../components/adminPanel/CarDrivePage";

function AdminCarDrivePage() {
  return (
    <div className="adminCarDrivePage">
      <AdminPanel></AdminPanel>
      <CarDrivePage></CarDrivePage>
    </div>
  );
}

export default AdminCarDrivePage;
