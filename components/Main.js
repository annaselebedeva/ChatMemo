import React, { useState } from "react";

import Banner from "./Banner";
import MainDesktop from "./MainDesktop";
import MainMobile from "./MainMobile";
import {isMobile} from 'react-device-detect';
import users from '../pages/api/mockdata.json';
import { PRIMARY_COLOR } from "@/constants/constants";
 // {data: "hello", time: "223-343430", id:234, from: 0},{data: "hello", time: "223-343430", id:234, from: 1}

const Main = () => {
    const [chatData, updateData] = useState(users.users);
    const [currUser, updateUser] = useState();
    const [leftPanel, changeView] = useState(true);

    const handleChangeUser = (user, newUser) => {
        if (newUser) {
            updateData([user, ...chatData]);
            updateUser(user);
        }
        else {
            if (currUser?.id !== user.id) {
                if (currUser) {
                    let newData = [...chatData];
                    let userUpdate = newData.find((d) => d.id === currUser.id);
                    userUpdate.messages = currUser.messages;
                    updateData(newData);
                }
                updateUser(user);
            }
        }
    }

    const handleUpdate = (user, toDelete) => {
        if (toDelete) {
            const newData = [...chatData];
            const delIndex = newData.indexOf(newData.find(u => u.id === user.id));
            newData.splice(delIndex, 1);
            updateData(newData);
            updateUser();
        }
        else {
            updateUser(user);
        }
    }

    return (
        <>
            <Banner />
            <div className={`flex w-full border-t-4 border-${PRIMARY_COLOR}-400 overflow-auto`} style={{height: "calc(100% - 75px)"}}>
                {/* {isMobile
                    ? <MainMobile currUser={currUser} chatData={chatData} handleChangeUser={handleChangeUser} handleUpdate={handleUpdate} />
                    :  */}
                    <MainDesktop currUser={currUser} chatData={chatData} handleChangeUser={handleChangeUser} handleUpdate={handleUpdate} />
                {/* } */}
            </div>
        </>
    );
};

export default Main;