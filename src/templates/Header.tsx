import Image from 'next/image';
import Link from 'next/link';

import LogoAvanue from '../../public/assets/images/logo-pa.png';
import { Section } from '../components/layout/Section';

const Header = () => (
  <Section>
    <div className="container">
      <Link href="https://pointavenue.com/" passHref={true}>
        <Image src={LogoAvanue} alt={'logo'} />
      </Link>
    </div>
  </Section>
);

export { Header };
