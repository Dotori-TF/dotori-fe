export const nameCheck = (name?: string): string => {
  if (!name || name.length < 1) return "이름을 입력해주세요.";
  return "";
};

export const emailCheck = (email?: string): string => {
  if (!email || email.length < 1) return "이메일을 입력해주세요.";
  const reg_email =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (!reg_email.test(email)) {
    return "이메일 형식이 잘못되었습니다.";
  }
  return "";
};

export const passwordCheck = (pw?: string): string => {
  if (!pw || pw.length < 1) return "비밀번호를 입력해주세요.";
  const num = pw.search(/[0-9]/g);
  const eng = pw.search(/[a-z]/gi);
  if (pw.length < 6) {
    return "최소 6자 이상 입력해주세요.";
  }
  if (num < 0 || eng < 0) {
    return "영문과 숫자를 모두 포함하여 6자 이상 입력해주세요.";
  }
  return "";
};
