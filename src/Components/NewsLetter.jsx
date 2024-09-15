import newsletter_img from '../assets/images/newsletter_img.png';
import subscribe from '../assets/icons/subscribe.png';

const NewsLetter = () => {
  return (
    <div className="max-container">
      <div className="bg-secondary flex flex-col md:flex-row items-center gap-7 xl:gap-20 p-8 xl:p-16 rounded-3xl">
        <img
          src={newsletter_img}
          alt=""
          className="w-full max-w-[280px] lg:max-w-[50%] xl:max-w-[425px] h-auto"
        />
        <div className="flex-1 flex flex-col justify-between  gap-3 w-full lg:max-w-[425px]">
          <h3 className="text-2xl sm:text-3xl lg:text-[38px] text-white font-semibold mb-2">
            Join our weekly digest
          </h3>
          <p className="text-lg sm:text-xl lg:text-[22px] text-white leading-tight">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <div className="bg-white w-full h-12 flex   gap-3 pl-5 mt-5  rounded-[20px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12  rounded-lg outline-none border-none bg-transparent text-primary text-base"
              required
            />
            <button className="nav-button bg-cta w-full  h-12  rounded-[20px] hover:skew-y-2 ">
              <img src={subscribe} alt="" className="w-4 h-4 lg:w-5 sm:h-5" />
              <p>Subscribe</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
