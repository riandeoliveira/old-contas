import { IconType } from "react-icons";

export type ProjectType = {
  id: string;
  name: string;
  description: string;
  image: string;
  skill_icons: any[];
  github_link: string;
  website_link: string;
  release_date: string;
};

export type SectionNameType =
  | "about_me"
  | "projects"
  | "skills";

export type SectionType = {
  id: string;
  name: SectionNameType;
  label: string;
};

export type SocialMediasType = {
  id: string;
  name: string;
  url: string;
  icon: IconType;
};

export type SkillType = {
  id: string;
  title: string;
  icon: any;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  authenticated: boolean;
};
