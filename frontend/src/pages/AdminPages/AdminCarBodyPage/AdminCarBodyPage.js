import "./AdminCarBodyPage.scss";
import AdminPanel from "../../../components/adminPanel/AdminPanel";
import CarBodyPage from "../../../components/adminPanel/CarBodyPage";

function AdminCarBodyPage() {
  return (
    <div className="adminCarBodyPage">
      <AdminPanel></AdminPanel>
      <CarBodyPage></CarBodyPage>
    </div>
  );
}

export default AdminCarBodyPage;
