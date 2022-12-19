import { avatar } from "./avatar";

type Profile = {
  name: string;
  twitter: string;
  github: string;
  website: string;
  mastdon: string;
  description: string;
  // base64 encoded image
  avatar: string;
};

export const profile: Profile = {
  name: "Hamachi",
  twitter: "Go2eatnow",
  github: "Hamachi-geek",
  mastdon: "hamachi@mstdn.y-zu.org",
  description: "Gadget enthusiast",
  avatar,
};
