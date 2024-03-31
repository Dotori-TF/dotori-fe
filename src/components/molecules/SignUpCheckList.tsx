/* eslint-disable react/jsx-key */
import { Check, NextStep, SignUpType } from "@/model/SignUp";
import { useEffect, useState } from "react";

type Agree = {
  essential: boolean;
  title: string;
  link?: string;
};

type Props = {
  signUpObj: SignUpType;
  setSignUpObj: Function;
  nextStep: NextStep;
  setNextStep: Function;
};

const agreeList: Agree[] = [
  { essential: true, title: "만 14세 이상입니다." },
  {
    essential: true,
    title: "커리어리 이용약관 동의",
    link: "https://publy.co/content/755",
  },
  {
    essential: true,
    title: "개인정보 수집 및 이용 동의",
    link: "https://publy.co/content/7135",
  },
  {
    essential: false,
    title: "마케팅 정보 수신 동의",
    link: "https://publy.co/content/7136",
  },
];

const SignUpCheckList = (props: Props) => {
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const [checkEssential, setCheckEssential] = useState<boolean>(false);

  useEffect(() => {
    const newList: Check[] = [];
    agreeList.forEach((item: Agree, idx: number) => {
      newList.push({ checked: false, essential: item.essential });
    });
    props.setSignUpObj({...props.signUpObj, termList: newList});
  }, []);

  useEffect(() => {
    setCheckAll(props.signUpObj.termList.every((item) => item.checked));
    const val = props.signUpObj.termList.every((item) => {
      return !item.essential || item.checked;
    })
    setCheckEssential(val);
    props.setNextStep({...props.nextStep, essential : val});
  }, [props.signUpObj.termList]);

  const resetCheckList = (flag: boolean) => {
    let newChkList: Check[] = [...props.signUpObj.termList];
    if (!props.signUpObj.termList) return;
    props.signUpObj.termList.forEach((item: Check, idx: number) => {
      newChkList[idx]["checked"] = flag;
    });
    props.setSignUpObj({...props.signUpObj, termList: newChkList})
  };

  const changeChkList = (idx: number) => {
    let newChkList = [...props.signUpObj.termList];
    newChkList[idx] = {
      checked: !newChkList[idx].checked,
      essential: newChkList[idx].essential,
    };
    props.setSignUpObj({...props.signUpObj, termList: newChkList})
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center mb-4 font-bold text-sm">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="custom-checkbox"
            checked={checkAll}
            onClick={() => {
              resetCheckList(!checkAll);
              setCheckAll(!checkAll);
            }}
          ></input>
          <label
            htmlFor="all-agree"
            className="pl-2 mb-0 cursor-pointer text-sm flex-grow text-color-slate-600"
          >
            모두 동의
          </label>
        </div>
      </div>
      {agreeList.map((item: Agree, idx: number) => (
        <div className="flex flex-row justify-between items-center mb-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="custom-checkbox"
              onClick={() => {
                changeChkList(idx);
              }}
              checked={props.signUpObj.termList && props.signUpObj.termList[idx] && props.signUpObj.termList[idx].checked}
            ></input>
            <label
              htmlFor="all-agree"
              className="pl-2 mb-0 cursor-pointer text-sm flex-grow text-color-slate-600"
            >
              {item.essential ? "(필수) " : "(선택) "}
              {item.title}
            </label>
          </div>
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              className="rounded rfocus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-slate-500 focus-visible:ring-offset-2"
            >
              <p className="font-normal text-color-slate-600 text-xs underline underline-offset-2">
                보기
              </p>
            </a>
          ) : (
            <></>
          )}
        </div>
      ))}
    </>
  );
};

export default SignUpCheckList;
