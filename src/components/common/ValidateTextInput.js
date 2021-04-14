import React, { useState } from 'react'
export default function ValidateTextInput({ type, value }) {
    const ERROR_Normal = ['Do not field blank', 'Not a valid', 'Vui lòng nhập'];
    const ERROR_Password = ['Mật khẩu tối thiểu 6 kí tự',
        'Vui lòng nhập mật khẩu',
    ];
    const ERROR_Email = ['Email không hợp lệ. Vui lòng thử lại',
        'Vui lòng nhập email',
        'Email đã tồn tại trong hệ thống, vui lòng đăng nhập lại'
    ];
    const password = 'password',
        number = 'numeric',
        email = 'email-address';

    let _validate = { name: '', check: false };//check === false is right and else

    const validatePassword = (text) => {
        if (text.length >= 6 && text !== '') _validate = { name: '', check: false };
        else if (text === '') _validate = { name: ERROR_Password[1], check: true };
        else if (text.length < 6) _validate = { name: ERROR_Password[0], check: true };
        else _validate = { name: ERROR_Password[2], check: true };
    };

    const validateDefault = (text) => {
        if (text.length >= 6 && text !== '') _validate = { name: '', check: false };
        else if (text === '') _validate = { name: ERROR_Normal[1], check: true };
        else if (text.length < 6) _validate = { name: ERROR_Normal[0], check: true };
        else _validate = { name: ERROR_Password[1], check: true };
    };

    const validateEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            if (text === '') { _validate = { name: ERROR_Email[1], check: true }; }
            else _validate = { name: ERROR_Email[0], check: true };
        }
        // else if (text === '') _validate = { name: ERROR_Email[1], check: true };
        else {
            _validate = { name: '', check: false };
        }
    };
    let _type = type ? type : 'default';
    const handleValidate = (text) => {
        switch (_type) {
            case email:
                validateEmail(text);
                break;
            case password:
                validatePassword(text);
                break;
            default:
                validateDefault(text);
                break;
        }
    };
    handleValidate(value);
    return _validate; //check === false is right and else
}

