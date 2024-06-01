import { Outlet, useNavigation } from 'react-router-dom';
import SearchForm from "./search-form/SearchForm.jsx";
import Header from "./header/Header.jsx";
import Loader from "../components/loader/Loader.jsx";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div>
      {isLoading && <Loader />}
      <Header />
        <SearchForm />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
