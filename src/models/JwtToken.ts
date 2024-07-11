export enum UserRole {
    HR = 1,
    Delivery = 2
}

export type JwtToken = {
    Role: UserRole
}