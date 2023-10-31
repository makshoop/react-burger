import React from 'react';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Profile() {
    return (
        <>
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive">
                Личный кабинет
            </p>
        </>
    );
}

export default Profile;
