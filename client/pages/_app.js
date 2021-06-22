import '../styles/globals.css'
import '../components/styles/App.css'
import '../components/styles/exploration.css'
import '../components/styles/messanger.css'
import '../components/styles/parties.css'
import '../components/styles/profile.css'
import '../components/styles/Home.css'
import '../components/styles/login.css'
import '../components/styles/registration.css'
import '../components/styles/createParty.css'
import 'antd/dist/antd.css'
import { Provider } from 'next-auth/client'
function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps}>
      <Provider session={pageProps.session}>
        <Component />
      </Provider>
    </Component>
  )
}

export default MyApp
