import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.GitHub({
      clientId: '2e42f2752bb5b1bdce37',
      clientSecret: 'e6e63118e5d6384afeeb2c8891887151ceb0fa07',
    }),
    /*Providers.Email({
      server: {
        host: '',
        port: '',
        auth: {
          user: '',
          pass: '',
        },
      },
      form: '',
    }),*/
  ],
}

export default (req, res) => NextAuth(req, res, options)
