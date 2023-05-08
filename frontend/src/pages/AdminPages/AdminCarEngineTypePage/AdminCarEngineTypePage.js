import "./AdminCarEngineTypePage.scss";
import AdminPanel from "../../../components/adminPanel/AdminPanel";
import CarEngineTypePage from "../../../components/adminPanel/CarEngineTypePage";

function AdminCarEngineTypePage() {
  return (
    <div className="adminCarEngineTypePage">
      <AdminPanel></AdminPanel>
      <CarEngineTypePage></CarEngineTypePage>
    </div>
  );
}

export default AdminCarEngineTypePage;
