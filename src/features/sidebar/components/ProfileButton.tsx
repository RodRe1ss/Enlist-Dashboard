import { User } from "@/types";

type Props = {
  user: User;
};

const ProfileButton = ({ user }: Props) => {
  return (
    <div className="rounded-sm hover:bg-gray-200 transition-all p-1.5 cursor-pointer flex items-center gap-2">
      <div className="rounded-sm primary-mix text-white flex size-6 items-center justify-center capitalize">
        <span>{user.name[0]}</span>
      </div>
      <span className="text-gray-600! text-sm! font-medium! capitalize">
        {user.name.split("_")[0]}
      </span>
    </div>
  );
};

export default ProfileButton;
