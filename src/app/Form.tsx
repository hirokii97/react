import { LoginFlagContext } from "@/app/page";
import React, { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

// https://reffect.co.jp/react/react-hook-form#i
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const inputRef = useRef<HTMLInputElement | null>(null);
  const topLink = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const loginFlagContext = useContext(LoginFlagContext);

  if (!loginFlagContext) {
    throw new Error("LoginFlagContext is not provided");
  }

  const { loginFlag, setLoginFlag } = loginFlagContext;
  const handleChangeLogin = () => {
    loginFlag === "notLogin"
      ? setLoginFlag("login") // ログインしている場合はログアウト
      : setLoginFlag("notLogin"); // ログインしていない場合はログイン
  };

  const handleTopLink = () => {
    if (topLink.current) {
      topLink.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={topLink} style={{ marginTop: "20px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <div>メールかいて</div>}
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "パスワード入力は必須です",
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "アルファベットのみ入力してください。",
              },
              minLength: {
                value: 8,
                message: "8文字以上入力してください",
              },
            })}
          />
          {errors.password?.types?.required && (
            <div>{errors.password.types.required}</div>
          )}
          {errors.password?.types?.pattern && (
            <div>{errors.password.types.pattern}</div>
          )}
          {errors.password?.types?.minLength && (
            <div>{errors.password.types.minLength}</div>
          )}
        </div>
        <div>
          <input type="text" ref={inputRef} />
        </div>
        <button type="submit">送信</button>
      </form>
      <button onClick={handleChangeLogin}>アカウント切り替え</button>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <p>
        ああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
      <button onClick={handleTopLink}>トップへ戻る</button>
    </div>
  );
}
