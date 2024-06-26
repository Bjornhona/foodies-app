import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/assets/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';
import Navlink from './nav-link';

const MainHeader = () => {
  const navigation = [{
      href: '/meals',
      text: 'Browse the meals'
    }, {
      href: '/community',
      text: 'Foodies community'
    }
  ];

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImage} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            {navigation.map((nav, index) => {
              return <Navlink key={index} href={nav.href}>{nav.text}</Navlink>
            })}
          </ul>
        </nav>
      </header>
    </>
 
  )
}

export default MainHeader;