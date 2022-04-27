import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Draft from '../pages/Draft'
import Sent from '../pages/Sent'
import Inbox from '../pages/Inbox'
import PrivateRoute from '../components/PrivateRoute'
import Layout from '../components/Layout'
import NotFound from '../pages/NotFound'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/inbox',
        element: (
          <PrivateRoute>
            <Inbox />
          </PrivateRoute>
        ),
      },
      {
        path: '/draft',
        element: (
          <PrivateRoute>
            <Draft />
          </PrivateRoute>
        ),
      },
      {
        path: '/sent',
        element: (
          <PrivateRoute>
            <Sent />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]

export default routes
