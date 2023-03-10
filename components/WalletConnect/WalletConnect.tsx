import Icons from '@/utils/icons';
import {
  Button,
  CSSObject,
  Divider,
  Grid,
  Menu,
  Modal,
  Text,
  Title,
  UnstyledButton
} from '@mantine/core';
import {
  useAddress,
  useCoinbaseWallet,
  useDisconnect,
  useLogin, useMetamask,
  useUser,
  useWalletConnect
} from '@thirdweb-dev/react';
import Image from 'next/image';
import CoinbaseLogo from 'public/images/wallets/coinbase.jpg';
import MetamaskLogo from 'public/images/wallets/metamask.jpg';
import WalletConnectLogo from 'public/images/wallets/walletconnect.jpg';
import { useState } from 'react';

const styledConnectButton: CSSObject = {
  borderRadius: '15px',
  overflow: 'hidden',
  '&:hover': {
    boxShadow: '0 0 10px #6741d9',
  },
};

const WalletConnect = () => {
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const disconnect = useDisconnect();
  const address = useAddress();
  const [isOpen, setIsOpen] = useState(false);
  const { login } = useLogin();
  const { user, isLoggedIn } = useUser();

  return (
    <>
      {address ? (
        <Menu shadow="md" width={200} withinPortal={true} withArrow>
          <Menu.Target>
            <Button size="md" rightIcon={<Icons.Wallet className="text-xs" />}>
              {address.substring(0, 4)}...
              {address.substring(address.length - 4)}
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Profile</Menu.Label>
            <Menu.Item onClick={() => login()}>Login</Menu.Item>
            <Menu.Divider />
            <Menu.Item color="red" onClick={disconnect}>
              Disconnect
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : (
        <Button
          size="md"
          rightIcon={<Icons.Wallet className="text-xs" />}
          onClick={() => setIsOpen(true)}
        >
          Connect
        </Button>
      )}

      {address ? null : (
        <Modal
          opened={isOpen}
          onClose={() => setIsOpen(false)}
          centered
          title={<Title order={2}>Connect your wallet</Title>}
        >
          <Text size="sm">
            Start by connecting with one of the wallets below. Be sure to store
            your private keys or seed phrase securely. Never share them with
            anyone.
          </Text>

          <Divider size={1} my={20} color="dimmed" />

          <Grid gutter={30}>
            <Grid.Col span={3}>
              <UnstyledButton
                onClick={connectWithMetamask}
                sx={styledConnectButton}
              >
                <Image
                  src={MetamaskLogo}
                  alt="Metamask logo"
                  width={90}
                  height={90}
                />
              </UnstyledButton>
              <Text size="xs" align="center">
                Metamask
              </Text>
            </Grid.Col>
            <Grid.Col span={3}>
              <UnstyledButton
                onClick={connectWithWalletConnect}
                sx={styledConnectButton}
              >
                <Image
                  src={WalletConnectLogo}
                  alt="Walletconnect logo"
                  width={90}
                  height={90}
                />
              </UnstyledButton>
              <Text size="xs" align="center">
                Wallet Connect
              </Text>
            </Grid.Col>
            <Grid.Col span={3}>
              <UnstyledButton
                onClick={connectWithCoinbaseWallet}
                sx={styledConnectButton}
              >
                <Image
                  src={CoinbaseLogo}
                  alt="Coinbase logo"
                  width={90}
                  height={90}
                />
              </UnstyledButton>
              <Text size="xs" align="center">
                Coinbase
              </Text>
            </Grid.Col>
          </Grid>
        </Modal>
      )}
    </>
  );
};

export default WalletConnect;
