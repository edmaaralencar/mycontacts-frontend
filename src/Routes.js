import { Routes as BrowserRoutes, Route } from 'react-router-dom';

import EditContact from './pages/EditContact';
import Home from './pages/Home';
import NewContact from './pages/NewContact';

function Routes() {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </BrowserRoutes>
  );
}

export default Routes;
