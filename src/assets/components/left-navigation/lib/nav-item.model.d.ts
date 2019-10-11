export declare class NavItemIcon {
    prefix: string;
    name: string;
    constructor(init?: Partial<NavItemIcon>);
}
export declare enum NavItemType {
    Link = "link",
    Heading = "heading",
    HR = "hr",
    Function = "fn"
}
export declare class NavItemLink {
    relative?: boolean;
    url: string;
    target?: string;
    queryParams?: {
        [k: string]: any;
    };
    constructor(init?: Partial<NavItemLink>);
}
export declare class NavItem {
    text: string;
    itemType: NavItemType;
    icon: NavItemIcon;
    link: NavItemLink;
    onClick: ($event: any) => void;
    selected: boolean;
    id: string;
    constructor(init?: Partial<NavItem>);
}
export declare class NavHeading {
    icon: NavItemIcon;
    title: string;
    constructor(init?: Partial<NavItem>);
}
