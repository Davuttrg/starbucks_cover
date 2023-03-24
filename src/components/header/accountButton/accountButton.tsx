import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";

export const AccountButton = () => {
  const email = useAppSelector((state) => state.user.email);
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/login");

  const accountImage = useMemo(
    () => (
      <img
        className="rounded c-pointer"
        width="28"
        height="28"
        src={`https://api.dicebear.com/5.x/initials/svg?seed=${email}`}
      />
    ),
    [email]
  );

  return (
    <>
      {email ? (
        accountImage
      ) : (
        <span
          onClick={handleNavigate}
          className="c-pointer material-symbols-outlined"
        >
          account_circle
        </span>
      )}
    </>
  );
};
