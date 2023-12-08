import React from "react";
import { CiLocationArrow1, CiClock2 } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa6";
import { logo } from "../assets";

const Location = () => {
  return (
    <div className='"bg-black relative flex flex-col overflow-hidden'>
      <div className="border rounded-lg border-white mx-8">
        <div className="justify-center relative flex p-2 cursor-default text-white text-3xl font-semibold">
          Vị trí
        </div>
      </div>
      <div className="grid grid-cols-2 pb-2 h-[full] gap-2 m-8 mt-6 overflow-hidden relative rounded">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.3359763595613!2d106.8546075754576!3d10.937973456192289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174df9680227819%3A0xf6ec70f2f89ff84!2sLab%20Billiards%20-%20Coffee%20%26%20Billiards!5e0!3m2!1svi!2s!4v1701867235153!5m2!1svi!2s"
          className="rounded-lg "
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="reponsive-ggmaps"
        ></iframe>
        <div className="px-1 justify-center cursor-default"> 
            <img src={logo} className="h-[140px]" alt="logo" />
            <div className="border border-white rounded-md p-4 text-white text-1xl">
                <div className="flex pb-2"> <CiClock2 className="mr-2 text-2xl" /> Thời gian hoạt động: từ 8h30 sáng - 24h các ngày trong tuần.</div>
                <div className="flex pb-2"> <CiLocationArrow1 className="mr-2 text-2xl" />  Địa chỉ: 235 Trần Quốc Toản, phường Bình Đa, thành phố Biên Hòa, tỉnh Đồng Nai.</div>
                <div className="flex pb-2"> <GiRotaryPhone className="mr-2 text-2xl" />Số điện thoại: 035 950 8962.</div>
                <div className="flex pb-2"> <MdAlternateEmail className="mr-2 text-2xl" />Email: Lab.billiardsbh@gmail.com.</div>
                <div className="flex pb-2"> <FaFacebook className="mr-2 text-2xl" /> <a href="https://www.facebook.com/LabbilliardsBH" className="hover:text-red-500"> Lab Billiards Biên Hòa.</a></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
