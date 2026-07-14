export declare const Role: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const ContactStatus: {
    readonly PENDING: "PENDING";
    readonly READ: "READ";
    readonly REPLIED: "REPLIED";
};
export type ContactStatus = (typeof ContactStatus)[keyof typeof ContactStatus];
