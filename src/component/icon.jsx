// icon
import { FiShoppingCart } from "react-icons/all";
import { RiCoupon5Fill } from "react-icons/all";
import { FcPhoneAndroid } from "react-icons/all";
import { CgGift } from "react-icons/all";
import { BsShop } from "react-icons/all";

function Icon() {
  return (
    <div className="bg-gray-100">
      <div className="pt-4 container mx-auto flex justify-between ">
        <div className="w-2/12 p-2 rounded-2xl flex gap-2 bg-white">
          <FiShoppingCart className="h-auto w-6 max-sm:mx-auto"></FiShoppingCart>
          <p className="text-xl font-medium max-sm:hidden">LazMall</p>
        </div>

        <div className="w-2/12 p-2 rounded-2xl flex gap-2 bg-white">
          <RiCoupon5Fill className="h-auto w-6 max-sm:mx-auto"></RiCoupon5Fill>
          <p className="text-xl font-medium max-sm:hidden">คูปองลดเพิ่ม</p>
        </div>

        <div className="w-2/12 p-2 rounded-2xl flex gap-2 bg-white">
          <FcPhoneAndroid className="h-auto w-6 max-sm:mx-auto"></FcPhoneAndroid>
          <p className="text-xl font-medium max-sm:hidden">คูปองลดเพิ่ม</p>
        </div>

        <div className="w-2/12 p-2 rounded-2xl flex gap-2 bg-white">
          <CgGift className="h-auto w-6 max-sm:mx-auto"></CgGift>
          <p className="text-xl font-medium max-sm:hidden">คูปองลดเพิ่ม</p>
        </div>

        <div className="w-2/12 p-2 rounded-2xl flex gap-2 bg-white">
          <BsShop className="h-auto w-6 max-sm:mx-auto"></BsShop>
          <p className="text-xl font-medium max-sm:hidden">คูปองลดเพิ่ม</p>
        </div>
      </div>
    </div>
  );
}

export default Icon;
