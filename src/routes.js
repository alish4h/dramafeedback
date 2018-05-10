import Home from './pages/Home';
import About from './pages/About';
import Another from './pages/Another';
import NotFoundPage from './pages/not-found.vue';
import Students from './pages/Students';
import Session from './pages/Session';
import Performance from './pages/Performance';
import Settings from './pages/Settings';

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
    path: '/about/another/',
    component: Another
  },
  {
    path: '/students/',
    component: Students
  },
  {
    path: '/session/',
    component: Session
  },
  {
    path: '/performance/',
    component: Performance
  },
  {
    path: '/settings/',
    component: Settings
  },
  {
    path: '(.*)',
    component: NotFoundPage
  }
];
