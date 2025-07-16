import { useForm } from "react-hook-form";
import useUserStore from "../../stores/authStore";
import { editUser } from "../../api/user";
import { toast } from "react-toastify";

function Profile() {
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);
  const getMe = useUserStore((state) => state.getMe);
  const { register, handleSubmit, formState, reset } = useForm();
  const { isSubmitting } = formState;
  const handleUpdateBio = async (data) => {
    try {
      await editUser(token, data);
      toast.success("Updated");
      reset()
      getMe(token);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="m-4 p-4">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Profile</div>
          <div className="stat-value">{`${user.firstName} ${user.lastName}`}</div>
          <div className="stat-desc">{user.bio}</div>
        </div>
      </div>
      <form onSubmit={handleSubmit(handleUpdateBio)}>
        <fieldset disabled={isSubmitting} className="fieldset">
          <legend className="fieldset-legend">Update your bio</legend>
          <textarea
            name="bio"
            className="textarea h-24"
            placeholder={user.bio}
            {...register("bio")}
          />
          <button type="submit" className="btn btn-primary w-fit">
            Update Bio
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Profile;
