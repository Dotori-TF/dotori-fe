import Link from "next/link";
import { ReactNode } from "react";

type NavbarProps = {
};

const Navbar = (props: NavbarProps): ReactNode => {
  // const { type, size, onClick, children } = props;
  // // ex. string으로 변환하는 함수 구현??
  // const class:string = get_class({
  //     size: size,
  //     ...
  // });

  return (
    <nav className="flex flex-wrap h-14 border-0 border-b border-solid border-color-slate-300 bg-color-white sticky w-full min-w-max z-[5] top-0">
      <div className="bg-white flex justify-between w-full h-full max-w-screen-xl min-w-[1024px] mx-auto px-4">
        {/* Home & Nav */}
        <div className="tw-flex tw-items-center">
          <a className="tw-p-2 tw-m-0 tw-mr-2 tw-rounded focus-visible:tw-bg-color-slate-50 focus:tw-outline-none focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-color-slate-500 focus-visible:tw-ring-offset-2">
            Home
          </a>
          <div className="tw-flex tw-h-full tw-p-2 tw-items-center tw-gap-1 tw-font-medium tw-text-center tw-text-sm tw-leading-none hover:tw-text-slate-900 tw-text-slate-500">
            <p>커리어리 트렌드</p>
          </div>
        </div>
        {/* Search & Login & SignIn */}
        <div className="flex relative items-center gap-1">
          <div>
            <button className="inline-flex items-center justify-center border border-solid hover:bg-color-slate-50 text-color-text-button-primary border-color-slate-500 text-sm px-3 py-2 rounded font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-color-slate-500">
              <span className="text-ellipsis line-clamp-1">로그인</span>
            </button>
          </div>
          <div>
            <button className="inline-flex items-center justify-center border border-solid bg-color-background-button-primary-bold-enabled hover:bg-color-background-button-primary-bold-hover text-color-white border-color-slate-700 text-sm px-3 py-2 rounded font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-color-slate-500">
                <span className="text-ellipsis line-clamp-1">
                    <Link href="/signup">
                        회원가입
                    </Link>
                </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
