import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Tips90predict - Free Football And Basketball Tips And Predictions',
        description: 'Tips90predict offers accurate  football predictions daily.',
      },
    },
    {
      path: '/pan-panel',
      name: 'Panel',
      component: () => import('../views/PanelView.vue'),
      meta: {
        isAdmin: true
      }
    },
    {
      path: '/pan-login',
      name: 'AdminLogin',
      component: () => import('../views/AdminLoginView.vue')
    },
    {
      path: '/pan-signin',
      name: 'AdminSignin',
      component: () => import('../views/AdminSigninView.vue'),
      meta: {
        title: "Signin - Signin to Tips90predict",
        description: "Signin to get more offers and services",
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        title: "Login - Login to Tips90predict",
        description: "Login to enjoy more services ",
      },
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('../views/SignInView.vue'),
      meta: {
        title: "Signin - Signin to Tips90predict",
        description: "Signin to get more offers and services",
      },
    },
    {
      path: '/tips-of-the-day/:id',
      name: 'Tips',
      component: () => import('../views/TipsView.vue'),
      meta: {
        title: "Tips - Free Football Tips and Basketball betting tips",
        description: "Tips90predict offers accurate  football predictions daily",
      },
      props: true
    },
    {
      path: '/predictions/:id',
      name: 'Predictions',
      component: () => import('../views/predictionView.vue'),
      meta: {
        title: "Free Predictions and Tips",
        description: "Tips90predict offers accurate  football predictions daily",
      },
    },
    {
      path: '/vip',
      name: 'Vip',
      component: () => import('../views/VipView.vue'),
      meta: {
        title: "Vip - Get Vip Predictions",
        description: "Tips90predict offers vip sure predictions.",
      },
      // meta: { auth: true }
    },
    {
      path: '/news/:id',
      name: 'News',
      component: () => import('../views/NewsView.vue'),
      meta: {
        title: "News - Free sport news",
        description: "Tips90predict offers spors news ",
      },
    },
    {
      path: '/banker-of-the-day',
      name: 'Banker',
      component: () => import('../views/BankerView.vue'),
      meta: {
        title: "Banker - Free daily tips",
        description: "Tips90predict offers banker of day tips and prediction",
      },
    },
    {
      path: '/Straight-win',
      name: 'Daily',
      component: () => import('../views/DailyView.vue'),
      meta: {
        title: "Straight Win - Free daily tips",
        description: "Tips90predict offers daily tips and prediction",
      },
    },
    {
      path: '/bet/:betName',
      name: 'Bet',
      component: () => import('../views/BetView.vue'),
      meta: {
        title: "Bet - Free Double Chance, Over 2.5 Goals, Over 1.5 Goals, Under 2.5 Goals tips",
        description: "Tips90predict offers Double Chance, Over 2.5 Goals, Over 1.5 Goals, Under 2.5 Goals tips",
      },
      props: true
    },
    {
      path: '/basketball',
      name: 'Basketball',
      component: () => import('../views/BasketballView.vue'),
      meta: {
        title: "Basketball predictions and betting tips",
        description: "Get the latest free Basketball betting tips",
      },
    },
    {
      path: '/terms&condition',
      name: 'Terms',
      component: () => import('../components/Terms&Condition.vue'),
      meta: {
        title: "Terms - Our Terms and conditions",
        description: " our terms and conditions help you understand how we use your data",
      },
    },
    {
      path: '/refund-policy',
      name: 'Refund',
      component: () => import('../components/Refundpolicy.vue'),
      meta: {
        title: "Refund - Our Refund policy",
        description: " Our refund policy help you understand conditions underwhich refunds will be processed",
      },
    },
    {
      path: '/policy',
      name: 'Policy',
      component: () => import('../components/Policyinfo.vue'),
      meta: {
        title: "Policy - Our policy",
        description: " Our policy help you understand rules and regulations",
      },
    },
    {
      path: '/disclaimer',
      name: 'Disclaimer',
      component: () => import('../components/Disclaimerinfo.vue'),
      meta: {
        title: "Disclaimer",
        description: " Disclaimer to note",
      },
    },  
    {
      path: '/how-to-pay/:vipName',
      name: 'Pay',
      component: () => import('../views/PayView.vue'),
      meta: {
        title: "Pay - Pay for vip",
        description: "how to pay for our vip services",
      },
      props: true
    
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        title: "404 - Page not found",
        description: "Sorry page doesn't exist",
      },
    }
  ]
})

const currentUser = () => {
  const token = localStorage.getItem('token');
  return !!token; // Return true if token exists, false otherwise
}

const isAdmin = () => {
  const admin = localStorage.getItem('admin');
  return admin === 'true'; // Return true if admin is 'true', false otherwise
}

const dynamicTitleGuard = (to, from, next) => {
  document.title = to.meta.title || 'Tips90predict - Free Football Tips & Predictions';
  next();
};

router.beforeEach(dynamicTitleGuard);

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.isAdmin)) {
    if (isAdmin()) {
      next();
    } else {
      next('/');
    }
  } else if (to.matched.some((record) => record.meta.auth)) {
    if (currentUser()) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
})



export default router