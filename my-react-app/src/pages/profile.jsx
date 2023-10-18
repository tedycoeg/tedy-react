import { useLogin } from "../hooks/useLogin";

export const ProfilePage = () => {
  const username = useLogin();
  return (
    <>
      <div className="d-flex w-100 justify-content-center align-items-center tinggi flex-column">
        <h1>Profile</h1>
        <h1>Username : {username}</h1>
      </div>
    </>
  );
};
