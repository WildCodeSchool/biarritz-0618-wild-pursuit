const initialState = {
  isFinished: null
};

export default function reduce(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "@countdown/FINISHED":
      return {
        ...state,
        isFinished: true
      };
    case "@countdown/START":
      return {
        ...state,
        isFinished: false
      };
    case "@countdown/REBOOT":
      return {
        ...state,
        isFinished: null
      };
    default:
      return state;
  }
}
