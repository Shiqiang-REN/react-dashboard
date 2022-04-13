import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Login from './containers/login/login';
import Admin from './containers/admin/admin';
import GlobalAlert from './containers/globalAlert/globalAlert';
import Products from './containers/products/products';
import Categories from './containers/categories/categories';
import Details from './containers/products/details/details';
import AddUpdate from './containers/products/addUpdate/addUpdate';
import Roles from './containers/roles/roles';
import Users from './containers/users/users';
import Home from './components/home/home';
import SalesCharts from './containers/salesCharts/salesCharts';
import VisitorsCharts from './containers/visitorsCharts/visitorsCharts';

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={ <Login/> }/>
        <Route path='/admin' element={ <Admin/> }>
          <Route index path='home' element={<Home/>}/>
          <Route path='prod/categories' element={<Categories/>}/>
          <Route path='prod/products' element={<Products/>}/>
          <Route path='prod/products/details/:id' element={<Details/>}/>
          <Route path='prod/products/add-update' element={<AddUpdate/>}/>
          <Route path='prod/products/add-update/:id' element={<AddUpdate/>}/>
          <Route path='user' element={<Users/>}/>
          <Route path='role' element={<Roles/>}/>
          <Route path='charts/sales' element={<SalesCharts/>}/>
          <Route path='charts/visitors' element={<VisitorsCharts/>}/>
        </Route>
        <Route path='*' element={<Navigate to={'/'} />}/>
      </Routes>
      <GlobalAlert/>
    </div>
  );
}

export default App;
