import styles from "../style"
import { arrowUp } from "../assets";

const GetStarted = () => {
  return <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer opacity-100 transition-all ease-in-out duration-150 hover:p-[4px] hover:transition-all, ease-in-out,duration-150`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[1.4] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain relative" />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[1.4]">
          <span className="text-gradient">started</span>
        </p>
    </div>
  </div>;
};

export default GetStarted;
