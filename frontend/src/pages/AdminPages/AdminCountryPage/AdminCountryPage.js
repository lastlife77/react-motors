import "./AdminCountryPage.scss";
import AdminPanel from "../../../components/adminPanel/AdminPanel";
import CountryPage from "../../../components/adminPanel/CountryPage";

function AdminCountryPage() {
  return (
    <div className="aCdminCountryPage">
      <AdminPanel></AdminPanel>
      <CountryPage></CountryPage>
    </div>
  );
}

export default AdminCountryPage;
