import React, { useState } from "react";

import Banner from "./Banner";
import users from '../pages/api/mockdata.json';

import dynamic from 'next/dynamic';
import { isMobile } from 'react-device-detect';

const MainComponent = dynamic(() => isMobile ? import('./MainMobile') : import('./MainDesktop'), { ssr: false })

const Main = () => {
    const [chatData, updateData] = useState(users.users);
    const [currUser, updateUser] = useState();

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
            <MainComponent
                isMobile={isMobile}
                currUser={currUser}
                chatData={chatData}
                handleChangeUser={handleChangeUser}
                handleUpdate={handleUpdate} />
        </>
    );
};

export default Main;