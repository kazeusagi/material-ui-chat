import { atom } from 'jotai';

export const isOpenSidebarAtom = atom(false);
export const toggleSidebarAtom = atom(null, (get, set) => {
  set(isOpenSidebarAtom, (prev) => !prev);
});
