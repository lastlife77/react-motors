import "./AdminCarModelPage.scss";
import AdminPanel from "../../../components/adminPanel/AdminPanel";
import CarModelPage from "../../../components/adminPanel/CarModelPage";

function AdminCarModelPage() {
  return (
    <div className="adminCarModelPage">
      <AdminPanel></AdminPanel>
      <CarModelPage></CarModelPage>
    </div>
  );
}

export default AdminCarModelPage;
