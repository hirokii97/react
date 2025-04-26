import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div style={{ marginTop: "20px" }}>
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
        <button type="submit">送信</button>
      </form>
    </div>
  );
}
