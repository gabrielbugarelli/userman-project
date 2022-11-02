import { Home } from './screens/Home'
import './shared/styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export const App: React.FC = () => {
  return (
    <>
      <Home />
      <ToastContainer position='top-right' theme='dark' />
    </>
  )
}
