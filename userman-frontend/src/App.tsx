import { Home } from './screens/Home'
import './shared/styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { UsersProvider } from './shared/hooks/useUsers'

export const App: React.FC = () => {
  return (
    <UsersProvider>
      <Home />
      <ToastContainer position='top-right' theme='dark' />
    </UsersProvider>
  )
}
