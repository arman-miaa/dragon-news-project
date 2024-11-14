import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
      <div className="flex gap-2 items-center bg-base-200 p-2">
            <p className="bg-[#D72050] text-white px-3 py-1">Latest </p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                <Link to='/news'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, s voluptate sunt est hic sapiente?</Link>
                <Link to='/news'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, amet voluptate sunt est hic sapiente?</Link>
                <Link to='/news'>Lorem, ipsum  repudiandae explicabo asperiores voluptas voluptates voluptate sunt est hic sapiente?</Link>
           </Marquee>
      </div>
    );
};

export default LatestNews;