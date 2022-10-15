import { avatar } from "./avatar";

type Profile = {
  name: string;
  twitter: string;
  github: string;
  website: string;
  description: string;
  // base64 encoded image
  avatar: string;
};

export const profile: Profile = {
  name: "Hamachi",
  twitter: "Go2eatnow",
  github: "Hamachi-geek",
  website: "Making...",
  description: "Gadget enthusiast",
  avatar,
};
