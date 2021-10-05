import React, { useState } from 'react';
import store from '../redux/configureStores';
import { closeNoti } from '../redux/Notifications/Notification';

const Notification = () => {
  const [noti, setNoti] = useState(store.getState());

  store.subscribe(() => {
    setNoti(store.getState());
  });

  const closeWind = () => {
    store.dispatch(closeNoti(null));
  };

  const style = `noti ${noti.notiReduce.noti}`;

  return (
    <div className={style}>
      <span className="my-0 mx-4">{ noti.notiReduce.msg }</span>
      <button type="button" className="Btn-noti" onClick={closeWind}>X</button>
    </div>
  );
};

export default Notification;
