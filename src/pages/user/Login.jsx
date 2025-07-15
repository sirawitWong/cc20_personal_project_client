import { useForm } from "react-hook-form";
import Register from "../../components/user_components/Register";
import useUserStore from "../../stores/authStore";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/validator";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [resetForm, setReset] = useState(false);
  const login = useUserStore((state) => state.login);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleClose = () => {
    setReset((prev) => !prev);
  };
  const { isSubmitting, errors } = formState;

  const handleLogin = async (data) => {
    try {
      await login(data);
    } catch (err) {
      toast.error(err.message)
    }
  };

  return (
    <>
      <div className="h-[700px] pt-20 pb-28">
        <div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between max-md:flex-col">
          <div
            className="flex flex-col max-md:items-center max-md:text-center
					gap-4 mt-20 basis-3/5 "
          >
            <div className="text-4xl">Let them Cook</div>
            <h2 className="text-[30px] max-md:text-[28px] leading-8 mt-3 w-[514px]">
              Share your favorite Recipe
            </h2>
          </div>
          <div className="flex-1">
            <div className="card bg-base-100 w-full h-[350px] shadow-xl mt-8">
              <fieldset disabled={isSubmitting}>
                <form onSubmit={handleSubmit(handleLogin)}>
                  <div className="card-body">
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="username"
                      {...register("username")}
                    />
                    <p className="text-sm text-error">
                      {errors.username?.message}
                    </p>
                    <input
                      type="password"
                      className="input w-full"
                      placeholder="password"
                      {...register("password")}
                    />
                    <p className="text-sm text-error">
                      {errors.password?.message}
                    </p>
                    <button type="submit" className="btn btn-primary text-xl">
                      Login
                    </button>

                    <div className="divider my-0"></div>

                    <button
                      type="button"
                      className="btn btn-secondary text-lg"
                      onClick={() =>
                        document.getElementById("register-form").showModal()
                      }
                    >
                      Create new Account
                    </button>
                  </div>
                </form>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <dialog onClose={handleClose} id="register-form" className="modal">
        <div className="modal-box">
          <Register resetForm={resetForm} />
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
