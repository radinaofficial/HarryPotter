import Vue from 'vue';
import Router from 'vue-router';
import Navigation from '../components/navigation/Navigation';
import CharactersPage from '../components/characters/CharactersPage';
import SpellsPage from '../components/spells/SpellsPage';
import HousesPage from '../components/houses/HousesPage';
import OrdersPage from '../components/orders/OrdersPage';
import Footer from '../components/footer/Footer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/orders',
      name: 'OrdersPage',
      components: {
        navigation: Navigation,
        default: OrdersPage,
        footer: Footer,
      },
    },
    {
      path: '/spells',
      name: 'SpellsPage',
      components: {
        navigation: Navigation,
        default: SpellsPage,
        footer: Footer,
      },
    },
    {
      path: '/',
      name: 'CharactersPage',
      components: {
        navigation: Navigation,
        default: CharactersPage,
        footer: Footer,
      },
    },
    {
      path: '/houses',
      name: 'HousesPage',
      components: {
        navigation: Navigation,
        default: HousesPage,
        footer: Footer,
      },
    },
  ],
});
