import { Router } from '@vaadin/router';
import './components/ApplicationHeader';
import './containers/PageOne';
import './containers/PageTwo';

const router = new Router(document.getElementById('outlet'));

router.setRoutes([
  { path: '/', component: 'x-page-one' },
  { path: '/page-one', component: 'x-page-one' },
  { path: '/page-two', component: 'x-page-two' },
]);
