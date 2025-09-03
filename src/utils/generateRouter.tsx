import React from 'react';
import type { NavLinks } from '../types/NavLinks';
import { Route } from 'react-router-dom';

export const generateRoutes = (links: NavLinks[]): React.ReactNode[] => {
    const routes: React.ReactNode[] = [];

    links.forEach(link => {
        if (link.path && link.element) {
            routes.push(
                <Route
                    key={link.path}
                    path={link.path}
                    element={link.element}
                />
            );
        }

        if (link.children) {
            link.children.forEach(sublink => {
                if (sublink.path && sublink.element) {
                    routes.push(
                        <Route
                            key={sublink.path}
                            path={sublink.path}
                            element={sublink.element}
                        />
                    );
                }
            });
        }
    });

    return routes;
};
