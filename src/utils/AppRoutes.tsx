import { Routes } from 'react-router-dom';
import { generateRoutes } from './generateRoutes';
import { NAV_LINKS } from '../data/links';

export function AppRoutes() {
    return <Routes>{generateRoutes(NAV_LINKS)}</Routes>;
}
