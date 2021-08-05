import { RolesBuilder } from "nest-access-control";

export enum AppRoles {
    Custumer = 'Custumer',
    Admin = 'Admin'
}

export enum AppResorurce {
    USER = 'USER'
}

export const roles:RolesBuilder = new RolesBuilder();
roles 
//Costumers Roles
 .grant(AppRoles.Custumer)
 .updateOwn([AppResorurce.USER])
 .deleteOwn([AppResorurce.USER])
 // ADMIN ROLES 
.grant(AppRoles.Admin)
.extend(AppRoles.Custumer)
.createAny([AppResorurce.USER])
.updateAny([AppResorurce.USER])
.deleteAny([AppResorurce.USER])

 