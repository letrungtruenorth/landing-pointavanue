/* eslint-disable import/order */
import Image from 'next/image';
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
import AcademicRigorImage from '../../../public/assets/images/img_2.jpg';
import PersonalHealthImage from '../../../public/assets/images/img_21.jpg';
import GlobalCitizenryImage from '../../../public/assets/images/img_19.jpg';
import CharacterImage from '../../../public/assets/images/img_20.jpg';
import { BoxHover } from '../BoxHover';
import styles from './index.module.scss';

const Camp = () => {
  return (
    <div className="pl-20 flex gap-8 mt-8 mb-8">
      <div className="text-5xl w-3/4 text-right">
        <p>
          <span className="font-bold">CAMP </span>
          <span>LEADERSHIP</span>
        </p>
        <span>PHILOSOPHY</span>
        <div className="flex justify-end w-full mt-8">
          <div
            className="flex items-center cursor-pointer swiper-button-prev"
            style={{ height: '1.4rem' }}
            // onClick={() => swiper.slideTo(1)}
          >
            <div className={styles.arrowLeft}></div>
          </div>
          <div
            className="flex items-center cursor-pointer swiper-button-next"
            style={{ height: '1.4rem' }}
            // onClick={() => swiper.slideTo(2)}
          >
            <div className={styles.arrowRight}></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden">
        <div className="swipper">
          <Swiper
            className="mySwiper"
            slidesPerView={3}
            // onSwiper={(s: any) => setSwiper(s)}
            spaceBetween={30}
            // onInit={(ev) => {
            //   setMySwiper(ev);
            // }}
          >
            <SwiperSlide>
              <Image
                src={AcademicRigorImage}
                alt="img"
                width={400}
                height={245}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={PersonalHealthImage}
                alt="img"
                width={400}
                height={245}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={GlobalCitizenryImage}
                alt="img"
                width={400}
                height={245}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={CharacterImage} alt="img" width={400} height={245} />
            </SwiperSlide>
          </Swiper>
          {/* <Image src={AcademicRigorImage} alt="img" width={400} height={245} /> */}
        </div>
        <div className="mt-16 pr-20">
          <p>
            Campers will participate in invaluable programs and activities that
            embody our four pillars of leadership: academic courses,
            life-coaching, fitness, community service, daily healthy habits,
            nature, exploration, sports, arts, peer leadership, and more!
          </p>
          <p className="text-base mt-12 cursor-pointer">
            <span>READ </span>
            <BoxHover text={'More'} />
          </p>
        </div>
      </div>
    </div>
  );
};

export { Camp };
