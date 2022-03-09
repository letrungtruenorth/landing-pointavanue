import { Background } from '../components/background/Background';
import { Banner } from '../components/banner';
import { Camp } from '../components/camp';
import { Meta } from '../components/layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Base = () => (
  <Background color="bg-black">
    <div className="antialiased min-h-screen text-white">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      {/* <Header /> */}
      <Banner />
      <Camp />
    </div>
  </Background>
);

export { Base };
