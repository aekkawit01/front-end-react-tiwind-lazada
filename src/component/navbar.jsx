// icon
import { AiOutlineShopping } from "react-icons/all";
import { BsSearch } from "react-icons/all";
import { MdTrolley } from "react-icons/all";
import { RiCoupon3Line } from "react-icons/all";
import { AiFillGift } from "react-icons/all";

function Navbar() {
  return (
    <nav>
      <img src="./img/lazada.jpg" className="w-full max-sm:hidden"></img>

      <div className="flex  justify-end bg-gray-100 pl-10 text-gray-400 max-sm:hidden">
        <p className=" px-3">ช้อปคุ้มกว่าเดิมบนแอป</p>
        <p className=" px-3">ขายสินค้ากับลาซาด้า</p>
        <p className=" px-3">ช่วยเหลือ</p>
        <p className=" px-3">ติดตามสินค้า</p>
        <p className=" px-3">ลงชื่อเข้าใช้</p>
        <p className=" px-3">สมัครสมาชิก</p>
        <p className=" px-3 mr-16">CHANGE LANGUAGE</p>
      </div>

      <div className="flex mt-3 sticky">
        <div className="flex basis-3/12  justify-center max-sm:hidden   ">
          <AiOutlineShopping className="h-9 w-auto text-pink-500"></AiOutlineShopping>
          <p className="text-2xl font-bold p-auto pt-1 text-blue-900">Lazada</p>
        </div>

        <div className="flex flex-wrap w-6/12 max-sm:w-full">
          <input
            type="text"
            placeholder="ค้นหาในลาซาด้า"
            className="bg-gray-100 w-8/12 max-sm:mx-auto max-sm:w-10/12"
          ></input>
          <BsSearch className=" h-full w-10 bg-orange-500 text-white p-2 "></BsSearch>
          <MdTrolley className="h-full w-auto px-8 text-blue-900 max-sm:hidden"></MdTrolley>
        </div>

        <div className="flex basis-3/12 max-sm:hidden">
          <RiCoupon3Line className="h-10 w-auto text-pink-400"></RiCoupon3Line>
          <div className="flex flex-col text-sm text-blue-800 font-bold">
            <p>ลูกค้าใหม่ซื้อ</p>
            <p>ของชิ้นแรกฟรี</p>
          </div>
          <AiFillGift className="h-10 w-auto px-2 text-pink-400"></AiFillGift>
        </div>
      </div>

      <div className="mt-10 relative">
        <img src="./img/lazada_1.jpg" className="h-80 w-full max-sm:h-48"></img>

        <div className="bg-white z-50 absolute top-1 left-20 px-2 max-sm:hidden">
          <p>อุปกรณ์ อิเล็กทรอนิกส์</p>
          <p>อุปกรณ์เสริม อิเล็กทรอนิกส์</p>
          <p>ทีวีและเครื่องใช้ ไฟฟ้าในบ้าน</p>
          <p>สุขภาพและความงาม</p>
          <p>เด็กอ่อน และของเล่น</p>
          <p>ซูเปอร์มาร์เก็ต และสัตว์เลี้ยง</p>
          <p>บ้านและไลฟ์สไตล์</p>
          <p>แฟชั่น และ เครื่องประดับผู้หญิง</p>
          <p>แฟชั่น และ เครื่องประดับผู้ชาย</p>
          <p>แฟชั่น และ เครื่องประดับสำหรับเด็ก</p>
          <p>กีฬาและ การเดินทาง</p>
          <p>ยานยนต์ และอุปกรณ์</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
