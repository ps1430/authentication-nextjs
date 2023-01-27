import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
export const authOptions = {
    providers: [
        GithubProvider ({
            clientId:'508c5a5cfec32cd0570f',
            clientSecret:' fb3ffeb2524baeb922779600acfba3a1b9d9d424',
        })
    ]
};
export default NextAuth(authOptions)