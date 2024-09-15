import { assets } from '../assets/constants';
import avatar from '../assets/images/Avatar-3.png';

const CollectionItem = () => {
  return (
    <div className=" w-full rounded-xl  ">
      <div className=" flex flex-col gap-4">
        <img src={assets.pri_placeholder} alt="" className="scale-animation" />
        <div className="flex-1 flex justify-center items-center gap-4  ">
          <div>
            <img
              src={assets.sec_placeholder_1}
              alt=""
              className="w-24 h-24 scale-animation"
            />
          </div>
          <div>
            <img
              src={assets.sec_placeholder_2}
              alt=""
              className="w-24 h-24 scale-animation"
            />
          </div>

          {/* total collections */}
          <div className="bg-cta w-24 h-24 rounded-xl flex items-center justify-center scale-animation">
            <p className="text-xl  font-monospace ">1025+</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Space Walking</h2>
          <div className="flex items-center gap-3">
            <img src={avatar} alt="Avatar" className="w-6 h-6 rounded-full" />

            <p className="text-base font-semibold">Anime Kid</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
