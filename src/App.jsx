import { AppRouter } from './router/AppRouter'
import { Toaster} from 'sonner'


function App() {

  return (
    <>
      <Toaster richColors position="bottom-center" />

      <AppRouter />
    </>
  )
}

export default App
