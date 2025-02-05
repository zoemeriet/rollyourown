import { useGameConfig } from "@/hooks/config";
import { Icon, IconProps } from "..";

export const Weed = (props: IconProps) => {
  const { nsfw } = useGameConfig();
  if (nsfw) {
    return <></>;
  }

  return (
    <Icon viewBox="0 0 60 60" height="60px" width="60px" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.5 13.8333H41.6111V16.6111H47.1667V24.9445H49.9445V41.6111H52.7222V47.1667H49.9445V41.6111H47.1667V33.2778H44.3889V27.7222H41.6111V30.5H38.8333V47.1667H33.2778V36.0556H30.5V47.1667H24.9444V38.8333H22.1667V47.1667H16.6111V38.8333H13.8333V47.1667H8.27778V24.9445H11.0556V22.1667H13.8333V19.3889H27.7222V16.6111H30.5V13.8333ZM41.6111 24.9445H44.3889V22.1667H41.6111V24.9445Z"
      />
    </Icon>
  );
};
