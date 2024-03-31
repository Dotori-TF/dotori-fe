/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import Image from "next/image";
import { useEffect, useState } from "react";
import { emailCheck, nameCheck, passwordCheck } from "@/utils/signUp";
import { NextStep, SignUpType } from "@/model/SignUp";

type Props = {
  signUpObj: SignUpType;
  setSignUpObj: Function;
  nextStep: NextStep;
  setNextStep: Function;
};

type ValidationMsgType = {
  name?: string;
  email?: string;
  password?: string;
};
type ValidationFlagType = {
  name: boolean;
  email: boolean;
  password: boolean;
};

const SignUpInputList = (props: Props) => {
  const [valObj, setValObj] = useState<ValidationMsgType>({});
  const [valFlag, setValFlag] = useState<ValidationFlagType>({
    name: false,
    email: false,
    password: false,
  });
  useEffect(() => {
    const val = nameCheck(props.signUpObj.name)
    setValObj({ ...valObj, name: val });
    if(val=='' && valFlag.name) props.setNextStep({...props.nextStep, name:true});
    else props.setNextStep({...props.nextStep, name:false});
  }, [props.signUpObj.name]);
  useEffect(() => {
    const val = emailCheck(props.signUpObj.email)
    setValObj({ ...valObj, email: val });
    if(val=='' && valFlag.email) props.setNextStep({...props.nextStep, email:true});
    else props.setNextStep({...props.nextStep, email:false});
  }, [props.signUpObj.email]);
  useEffect(() => {
    const val = passwordCheck(props.signUpObj.password)
    setValObj({ ...valObj, password: val });
    if(val=='' && valFlag.password) props.setNextStep({...props.nextStep, password:true});
    else props.setNextStep({...props.nextStep, password:false});
  }, [props.signUpObj.password]);
  return (
    <>
      <div className="mb-4 mb-4">
        <label htmlFor="name" className="mb-2 text-sm font-bold">
          이름
        </label>
        <input
          className={!valFlag.name || valObj.name == "" ? "custom-input" : "custom-input !border-color-red-700 !ring-color-red-700"}
          placeholder="프로필 이름"
          value={props.signUpObj["name"]}
          onChange={(e) => {
            setValFlag({ ...valFlag, name: true });
            props.setSignUpObj({
              ...props.signUpObj,
              name: e.target.value.replace(/(\s*)/g, ""),
            });
          }}
        ></input>
        {!valFlag.name || valObj.name == "" ? (
          <></>
        ) : (
          <Validation validationMsg={valObj.name ?? ""} />
        )}
      </div>
      <div className="mb-4 mb-4">
        <label htmlFor="email" className="mb-2 text-sm font-bold">
          이메일
        </label>
        <input
          className={!valFlag.email || valObj.email == "" ? "custom-input" : "custom-input !border-color-red-700 !ring-color-red-700"}
          placeholder="example@publy.co"
          value={props.signUpObj["email"]}
          onChange={(e) => {
            setValFlag({ ...valFlag, email: true });
            props.setSignUpObj({
              ...props.signUpObj,
              email: e.target.value.replace(/(\s*)/g, ""),
            });
          }}
        ></input>
        {!valFlag.email || valObj.email == "" ? (
          <></>
        ) : (
          <Validation validationMsg={valObj.email ?? ""} />
        )}
      </div>
      <div className="mb-4 mb-4">
        <label htmlFor="name" className="mb-2 text-sm font-bold">
          비밀번호
        </label>
        <input
          type="password"
          className={!valFlag.password || valObj.password == "" ? "custom-input" : "custom-input !border-color-red-700 !ring-color-red-700"}
          placeholder="영문, 숫자 포함 6자 이상"
          value={props.signUpObj["password"]}
          onChange={(e) => {
            setValFlag({ ...valFlag, password: true });
            props.setSignUpObj({
              ...props.signUpObj,
              password: e.target.value.replace(/(\s*)/g, ""),
            });
          }}
        ></input>
        {!valFlag.password || valObj.password == "" ? (
          <></>
        ) : (
          <Validation validationMsg={valObj.password ?? ""} />
        )}
      </div>
    </>
  );
};

type ValidationProps = {
  validationMsg: string;
};

const Validation = (props: ValidationProps) => {
  return (
    <div className="flex items-start gap-1 mt-2 false">
      <Image
        className="h-4 w-4 fill-color-text-error mt-0.5"
        src="/error.svg"
        alt="error"
        width={24}
        height={24}
      />
      <p className="text-sm font-normal text-color-text-error">
        {props.validationMsg}
      </p>
    </div>
  );
};

export default SignUpInputList;
