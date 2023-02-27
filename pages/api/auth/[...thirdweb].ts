import { ThirdwebAuth } from '@thirdweb-dev/auth/next';
import { PrivateKeyWallet } from '@thirdweb-dev/auth/evm';
import { DOMAIN } from '@/utils/constants';

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: DOMAIN,
  wallet: new PrivateKeyWallet(process.env.AUTH_PRIVATE_KEY || ''),
  callbacks: {
    onLogin: async (address: string) => {
      // Handle user logic here
      // Add user to DB if it does not exist
      // Add session data if the user exists
    },
  },
});

export default ThirdwebAuthHandler();
