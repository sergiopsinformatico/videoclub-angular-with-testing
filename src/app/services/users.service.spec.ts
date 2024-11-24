import { User } from "../models/user.model";
import { LoggerService } from "./logger.service";
import { UsersService } from "./users.service";

describe('UsersService', () => {

    it('Test 01 User - Create user', () => {

        const loggerService = new LoggerService();
        spyOn(loggerService, 'loggerInsertMessage');

        const userService = new UsersService(loggerService);

        const newUser = new User({
            'id': 'prueba',
            'name': 'prueba',
            'familyName': 'prueba',
            'birthdate': 'fecha',
            'address': 'dir'
        });

        userService.createUser(newUser);
        expect(userService.getUser(newUser.getId()).getId()).toBe(newUser.getId());
        expect(loggerService.loggerInsertMessage).toHaveBeenCalledTimes(1);
    });

    it('Test 02 User - Delete user', () => {

        const loggerService = new LoggerService();
        spyOn(loggerService, 'loggerInsertMessage');
        spyOn(loggerService, 'loggerDeleteMessage');

        const userService = new UsersService(loggerService);

        const newUser = new User({
            'id': 'prueba',
            'name': 'prueba',
            'familyName': 'prueba',
            'birthdate': 'fecha',
            'address': 'dir'
        });

        userService.createUser(newUser);
        userService.deleteUser(newUser);

        let userDeleted = userService.getUser(newUser.getId());
        expect(userDeleted).toBe(null);

        expect(loggerService.loggerInsertMessage).toHaveBeenCalledTimes(1);
        expect(loggerService.loggerDeleteMessage).toHaveBeenCalledTimes(1);
    });

});