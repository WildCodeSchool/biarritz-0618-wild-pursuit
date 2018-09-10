const initialState = {
  isOpen: false,
  content: null
};

export default function reduce(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case "@popup/CLOSE":
      return {
        ...state,
        isOpen: false,
        content: null
      };
    case "@popup/OPEN":
      return {
        ...state,
        isOpen: true,
        content: payload.content
      };
    case "@popup/CHANGE":
      return {
        ...state,
        isOpen: true,
        content: payload.content
      };
    default:
      return state;
  }
}
