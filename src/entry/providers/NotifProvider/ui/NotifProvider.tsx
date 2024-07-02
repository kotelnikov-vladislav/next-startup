'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import './NotifProvider.scss';

export const NotifProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <ToastContainer
                position={'top-right'}
                style={{ fontSize: 'var(--font-size-m' }}
            />
        </>
    );
};
