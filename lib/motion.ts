export const CONTAINER_VARIANT = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
};

export const CONTAINER_VARIANT_SCALE = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

export const CONTAINER_VARIANT_STAGGER = {
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

export const ITEM_VARIANT = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
