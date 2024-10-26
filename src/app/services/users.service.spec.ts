import { User } from "../models/user.model";

describe('UsersService', () => {

    it('Test 01 User - Create user', () => {

        const newUser = new User({
            'id': 'prueba',
            'name': 'prueba',
            'familyName': 'prueba',
            'birthdate': 'fecha',
            'address': 'dir'
        });
        expect(newUser.getId()).toBe('prueba');

    });

    it('Test 02 User - Delete user', () => {

        const newUser = new User(null);
        expect(newUser.getId()).toBe('');

    });

});