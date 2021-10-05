const OPEN_NOTI = 'bookStore/notification/OPEN_NOTI';
const CLOSE_NOTI = 'bookStore/notification/CLOSE_NOTI';

const initialState = { msg: 'test', noti: 'd-none' };

export const openNoti = (payload) => ({
  type: OPEN_NOTI,
  payload,
});

export const closeNoti = (payload) => ({
  type: CLOSE_NOTI,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_NOTI:
      return { msg: action.payload, noti: 'd-block' };
    case CLOSE_NOTI:
      return { msg: 'test', noti: 'd-none' };
    default:
      return state;
  }
};

export default reducer;
