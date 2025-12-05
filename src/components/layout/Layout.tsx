import React from 'react';
import './Layout.css';

import { Header } from '../header/Header';
import { Index } from '../index/Index';

export interface LayoutProps {
    user?: { name: string };
    children?: React.ReactNode;

}

export const Layout: React.FC<LayoutProps> = ({ user, children }: LayoutProps) => {

    const topics = [
        'Capital Cities',
        'American Presidents',
        'Song Titles',
        'World Rivers',
        'Famous Scientists',
        'Programming Languages',
    ];

    return (
        <article className="layout-root">
            <Header user={user} title="Capital Cities" />
            <main className="layout-main">
                <Index topics={topics} title="Index" />

                <section className="layout-content">
                    {children}
                </section>
            </main>
        </article>
    );
};
