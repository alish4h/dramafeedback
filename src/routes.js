import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Another from './pages/Another';
import NotFoundPage from './pages/not-found.vue';
import Students from './pages/Students.vue';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about/',
    component: About
  },
  {
    path: '/services/',
    component: Services
  },
  {
    path: '/about/another/',
    component: Another
  },
  {
    path: '(.*)',
    component: NotFoundPage
  },
  {
    path: '/students/',
    component: Students
  }
];
