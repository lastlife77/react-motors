import "./AdminCarBrandPage.scss";
import AdminPanel from "../../../components/adminPanel/AdminPanel";
import CarBrandPage from "../../../components/adminPanel/CarBrandPage";

function AdminCarBrandPage() {
  return (
    <div className="adminCarBodyPage">
      <AdminPanel></AdminPanel>
      <CarBrandPage></CarBrandPage>
    </div>
  );
}

export default AdminCarBrandPage;
