import "./AdminCarEnginePage.scss";
import AdminPanel from "../../../components/adminPanel/AdminPanel";
import CarEnginePage from "../../../components/adminPanel/CarEnginePage";

function AdminCarEnginePage() {
  return (
    <div className="adminCarEnginePage">
      <AdminPanel></AdminPanel>
      <CarEnginePage></CarEnginePage>
    </div>
  );
}

export default AdminCarEnginePage;
