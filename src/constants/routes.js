import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Cart from '../pages/Cart';

const routes = [
  {
    path: '/',
    label: 'Home',
    component: Home
  },
  {
    path: '/about',
    label: 'About Us',
    component: About
  },
  {
    path: '/contacts',
    label: 'Contacts',
    component: Contacts
  },
  {
    path: '/cart',
    label: 'Shopping cart',
    component: Cart
  },
]

export default routes;