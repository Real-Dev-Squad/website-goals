import { describe, expect, test } from "vitest";
import { transformUser } from "~/adapters/user.transformer";
import { USER_API_RESPONSE } from "~/tests/fixture/user";

describe.only('adapters/user.transformer', () => {
    describe('transformUser', () => {
        test('should have all the properties', () => {
            const user = transformUser(USER_API_RESPONSE)

            expect(user).to.have.property('id')
            expect(user).to.have.property('displayName')
            expect(user).to.have.property('username')
            expect(user).to.have.property('firstName')
            expect(user).to.have.property('lastName')
            expect(user).to.have.property('avatar')
            expect(user).to.have.property('initials')
        })

        test('should return correctly', () => {
            const user = transformUser({
                first_name: 'Pallab',
                last_name: 'Sonowal',
            })

            expect(user.displayName).toBe('Pallab Sonowal')
            expect(user.initials).toBe('PS')
        })
        
        test('should return correctly if first_name is undefined', () => {
            const user = transformUser({
                first_name: undefined,
                last_name: 'Sonowal',
                username: 'pallabez'
            })

            expect(user.displayName).toBe('pallabez')
            expect(user.initials).toBe('P')
        })
        
        test('should return correctly if last_name is undefined', () => {
            const user = transformUser({
                first_name: 'Pallab',
                last_name: undefined,
                username: 'pallabez'
            })

            expect(user.displayName).toBe('Pallab ')
            expect(user.initials).toBe('P')
        })
        
    })
})