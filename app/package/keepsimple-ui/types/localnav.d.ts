import React, { ReactNode } from "react";

export interface LocalNavProps{
    title: TitleProps;
    menu: MenuProps;
}

export interface TitleProps{
    title: string | ReactNode;
    link: string;
}

export interface MenuProps{
    items: ItemProps[];
    actions?: ActionProps[]
}

export interface ItemsProps{
    items: ItemProps[]
}

export interface ItemProps{
    title: string;
    link: string;
    className?: string;
    active?: boolean;
}

export interface ActionsProps{
    actions: ActionProps[]
}

export interface ActionProps{
    title: string;
    link: string;
    className?: string;
    onClick?: (event:  React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>void
}