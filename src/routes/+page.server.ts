import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: () => {
    throw redirect(302, "/success");
  },
};
