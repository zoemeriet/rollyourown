import { useGameConfig } from "@/hooks/config";
import { Icon, IconProps } from "..";

export const Ludes = (props: IconProps) => {
  const { nsfw } = useGameConfig();
  if (nsfw) {
    return <></>;
  }

  return (
    <Icon viewBox="0 0 60 60" height="60px" width="60px" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43 10.5V13H45.5V15.5H48V18H50.5V23H48V25.5H40.5V30.5H48V33H15.5V38H13V40.5H15.5V43H18V45.5H25.5V43H28V40.5H25.5V38H20.5V40.5H18V38H20.5V35.5H25.5V38H28V40.5H30.5V45.5H28V48H25.5V50.5H18V48H15.5V45.5H13V43H10.5V25.5H13V20.5H15.5V15.5H18V13H20.5V10.5H30.5V13H35.5V10.5H43ZM28 30.5H33V25.5H28V30.5ZM15.5 28V30.5H20.5V25.5H18V28H15.5ZM23 30.5H25.5V25.5H23V30.5ZM35.5 30.5H38V25.5H35.5V30.5ZM43 20.5H45.5V18H43V20.5Z"
      />
    </Icon>
  );
};
