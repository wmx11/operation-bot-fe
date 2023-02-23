import generalRoutes from '@/routes/generalRoutes';
import Icons from './icons';

export const mainMenu = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Application',
    href: '/',
  },
  {
    label: 'Litepaper',
    href: '/',
  },
];

export const socials = [
  {
    Icon: Icons.Discord,
    href: '/',
  },
  {
    Icon: Icons.Telegram,
    href: '/',
  },
  {
    Icon: Icons.Twitter,
    href: '/',
  },
];

export const footerMenu = [
  {
    section: 'Operation: BOT',
    items: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Application',
        href: '/',
      },
      {
        label: 'Litepaper',
        href: '/',
      },
      {
        label: 'Mint',
        href: '/',
      },
      {
        label: 'Team',
        href: '/',
      },
      {
        label: 'Roadmap',
        href: '/',
      },
    ],
  },
  {
    section: 'Legal',
    items: [
      {
        label: 'Privacy Policy',
        href: '/',
      },
      {
        label: 'Cookie Policy',
        href: '/',
      },
      {
        label: 'Terms of Services',
        href: '/',
      },
      {
        label: 'Disclaimer',
        href: generalRoutes.disclaimer,
      },
    ],
  },
];
