const defaultColors = {
  black: "#000000",
  darkest_purple: "#060526",
  white: "#ffffff",
};

const mainColors = {
  cyan: "#05f2db",
  dark_purple: "#361973",
  opaque_black: "#00000005",
  pink: "#ef2ef2",
  purple: "#7338f2",
};

export const colors = {
  black: defaultColors.black,
  cyan: mainColors.cyan,
  dark_purple: mainColors.dark_purple,
  darkest_purple: defaultColors.darkest_purple,
  opaque_black: mainColors.opaque_black,
  pink: mainColors.pink,
  purple: mainColors.purple,
  white: defaultColors.white,

  gradient_palette: Object.values(mainColors).toString(),
};
