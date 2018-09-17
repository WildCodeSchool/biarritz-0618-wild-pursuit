// {
// 	type: 'CLOSE_POPUP'
// }

export function closePopup() {
  return dispatch => {
    dispatch({
      type: "@popup/CLOSE"
    });
    dispatch({
      type: "@countdown/REBOOT"
    });
  };
}
