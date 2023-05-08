import "./AdminAutoPage.scss";
import AdminPanel from "../../../components/adminPanel/AdminPanel";
import AutoPage from "../../../components/adminPanel/AutoPage";

function AdminAutoPage() {
  return (
    <div className="adminAutoPage">
      <AdminPanel></AdminPanel>
      <AutoPage></AutoPage>
    </div>
  );
}

export default AdminAutoPage;
