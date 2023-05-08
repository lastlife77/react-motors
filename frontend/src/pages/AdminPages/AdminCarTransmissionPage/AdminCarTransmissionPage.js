import "./AdminCarTransmissionPage.scss";
import AdminPanel from "../../../components/adminPanel/AdminPanel";
import CarTransmissionPage from "../../../components/adminPanel/CarTransmissionPage";

function AdminCarTransmissionPage() {
  return (
    <div className="adminCarTransmissionPage">
      <AdminPanel></AdminPanel>
      <CarTransmissionPage></CarTransmissionPage>
    </div>
  );
}

export default AdminCarTransmissionPage;
