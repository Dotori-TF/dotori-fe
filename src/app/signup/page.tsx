/* eslint-disable react/jsx-key */
"use client";
import Navbar from "@/components/organisms/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import SignUpCheckList from "@/components/molecules/SignUpCheckList";
import SignUpInputList from "@/components/molecules/SignUpInputList";
import { NextStep, SignUpType } from "@/model/SignUp";

export default function SignUp() {
  const [infoOpen, setInfoOpen] = useState<boolean>(false);
  return (
    <>
      {/* Nav */}
      <div className="h-14 border-0 border-b border-solid border-color-slate-300 bg-color-slate-50 !border-b-0 fixed w-full z-[5]">
        <div className="bg-white flex justify-between w-full h-full max-w-screen-md mx-auto px-2 md:px-4 border border-solid border-slate-300 border-t-0 border-x-0 md:border-x">
          <div className="flex items-center">
            <Link className="w-[94px] h-6 m-2 false" href="/">
              임시 홈
            </Link>
          </div>
        </div>
      </div>
      <div className="h-14" />
      <div className="bg-slate-50 flex flex-col w-full min-h-[calc(100vh-56px)]">
        <div className="grow mx-auto px-0 w-full bg-white max-w-3xl border-0 md:border-l md:border-r border-solid border-slate-300">
          <div className="flex flex-col gap-10 w-full h-full px-4 pt-10 md:pt-[60px] pb-12 mx-auto md:max-w-sm">
            {/* 제목 소제목 */}
            <div>
              <h1 className="text-[1.75rem] md:text-[2rem] md:text-center text-slate-900 mb-2">
                요즘 개발자 커뮤니티
              </h1>
              <h4 className="text-lg text-slate-900 md:text-xl md:text-center mb-0">
                지금 커리어리에 가입하세요
              </h4>
            </div>
            {/* 카카오 로그인 버튼 */}
            <div>
              <button className="w-full bg-[#FEE500] rounded py-3 flex items-center justify-center gap-1 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-slate-500 focus-visible:ring-offset-2">
                <Image
                  className="h-5 w-5"
                  src="/kakao.png"
                  alt="KakaoImage"
                  width={20}
                  height={20}
                />
                <span className="font-bold text-base text-color-slate-900">
                  카카오로 3초만에 가입하기
                </span>
              </button>
              {/* form */}
              <div>
                <div className="flex flex-row justify-between items-center">
                  <div className="bg-color-slate-300 w-1/2 h-px"></div>
                  <p className="flex shrink-0 p-3 text-xs text-color-slate-500">
                    {" "}
                    또는{" "}
                  </p>
                  <div className="bg-color-slate-300 w-1/2 h-px"></div>
                </div>
                <div className="bg-color-slate-200 rounded">
                  <button
                    className="w-full bg-color-slate-200 rounded-t py-3 flex justify-center items-center gap-1 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-slate-500 focus-visible:ring-offset-2"
                    onClick={() => setInfoOpen(!infoOpen)}
                  >
                    <span className="font-bold text-base text-color-slate-600">
                      이메일로 가입하기
                    </span>
                    <Image
                      className={"transform fill-color-slate-600"}
                      src={infoOpen ? "/arrow_rotate.svg" : "/arrow.svg"}
                      alt="arrow"
                      width={16}
                      height={16}
                    />
                  </button>
                </div>
                {infoOpen && <EmailForm />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const EmailForm = () => {
  const [signUpObj, setSignUpObj] = useState<SignUpType>({termList:[]});
  const [nextStep, setNextStep] = useState<NextStep>({
    name: false,
    email: false,
    password: false,
    essential: false,
  });
  const [nextFlag, setNextFlag] = useState<boolean>(false);
  useEffect(() => {
    setNextFlag(Object.values(nextStep).every((val) => {return val}))
  }, [nextStep]);
  return (
    <div
      className="p-3 bg-color-slate-200 rounded-b py-3"
      id="signUpInfo"
      aria-hidden={false}
    >
      <SignUpInputList
        signUpObj={signUpObj}
        setSignUpObj={setSignUpObj}
        nextStep={nextStep}
        setNextStep={setNextStep}
      />
      <SignUpCheckList
        signUpObj={signUpObj}
        setSignUpObj={setSignUpObj}
        nextStep={nextStep}
        setNextStep={setNextStep}
      />
      <button
        className="items-center justify-center border border-solid bg-slate-700 hover:bg-slate-800 disabled:bg-slate-100 text-white disabled:text-slate-400 border-slate-700 disabled:border-slate-100 text-base px-4 py-3 rounded font-bold block w-full focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-slate-500 focus-visible:ring-offset-2
      mt-6"
        disabled = {!nextFlag}
        onClick={()=>console.log(signUpObj)}
      >
        회원가입
      </button>
    </div>
  );
};
