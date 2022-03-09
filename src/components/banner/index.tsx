/* eslint-disable react/no-unescaped-entities */
import { BoxHover } from '../BoxHover';

const Banner = () => (
  <div className="relative">
    <video
      autoPlay={true}
      playsInline={true}
      loop={true}
      id="myVideo"
      muted={true}
    >
      <source
        src="https://paathena-public-prod.s3.ap-southeast-1.amazonaws.com/netflix/video/CampYenTu.mp4"
        type="video/mp4"
      />
    </video>
    <div
      className="absolute text-white w-1/3"
      style={{ top: '20%', right: '4%' }}
    >
      <p className="text-6xl font-bold">"SUMMER LEADERS CAMP"</p>
      <p className="text-base">
        Built from premium West Point, Cambridge, and American Ivy League
        educational knowledge, our premier boarding camp program is a
        life-changing opportunity that inspires personal growth and leadership
        development.
      </p>
      <p className="text-base text-right mt-20 cursor-pointer">
        <span>READ </span>
        <BoxHover text={'More'} />
      </p>
    </div>
  </div>
);

export { Banner };
