import { User } from "../models/user.model";
import { UsersService } from "./users.service";

describe('UsersService', () => {

    it('Test 01 User - Create user', () => {

        const userService = new UsersService();

        const newUser = new User({
            'id': 'prueba',
            'name': 'prueba',
            'familyName': 'prueba',
            'birthdate': 'fecha',
            'address': 'dir'
        });

        userService.createUser(newUser);
        expect(userService.getUser(newUser.getId()).getId()).toBe(newUser.getId());

    });

    it('Test 02 User - Delete user', () => {

        const userService = new UsersService();

        const newUser = new User({
            'id': 'prueba',
            'name': 'prueba',
            'familyName': 'prueba',
            'birthdate': 'fecha',
            'address': 'dir'
        });

        userService.createUser(newUser);
        userService.deleteUser(newUser);
        expect(userService.getUser(newUser.getId())).toBe(null);

    });

});