import { useForm } from "react-hook-form";
import { registerSchema } from "../../utils/validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerAdmin } from "../../api/admin";
import useUserStore from "../../stores/authStore";

function AdminRegister() {
  const token = useUserStore(state => state.token)
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onblur",
  });
  const onSubmit = async (data) => {
    try {
      await registerAdmin(token, data)
      reset()
    } catch (err) {
      console.log(err);
    }
  };
  const { isSubmitting, errors } = formState;
  return (
    <div className="flex flex-col justify-center">
      <fieldset disabled={isSubmitting}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-body">
            <h1 className="text-2xl">Register New Admin</h1>
            <input
              type="text"
              className="input w-full"
              placeholder="First Name"
              {...register("firstName")}
            />
            <p className="text-sm text-error">{errors.firstName?.message}</p>
            <input
              type="text"
              className="input w-full"
              placeholder="Last Name"
              {...register("lastName")}
            />
            <p className="text-sm text-error">{errors.lastName?.message}</p>
            <input
              type="text"
              className="input w-full"
              placeholder="username"
              {...register("username")}
            />
            <p className="text-sm text-error">{errors.username?.message}</p>
            <input
              type="password"
              className="input w-full"
              placeholder="password"
              {...register("password")}
            />
            <p className="text-sm text-error">{errors.password?.message}</p>
            <input
              type="password"
              className="input w-full"
              placeholder="confirm password"
              {...register("confirmPassword")}
            />
            <p className="text-sm text-error">
              {errors.confirmPassword?.message}
            </p>
            <button className="btn btn-primary text-xl" disabled={isSubmitting}>
              Register Admin
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  )
}

export default AdminRegister