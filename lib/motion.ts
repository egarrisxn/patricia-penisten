export const CONTAINER_FADE = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
};

export const CONTAINER_FADE_N_STAGGER = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const CONTAINER_FADE_SCALE_N_STAGGER = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

export const ITEM_FADE = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

export const ITEM_FADE_N_SCALE = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
    },
  },
};
