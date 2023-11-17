import { describe, vi, afterEach, beforeEach, expect, test, type SpyInstance } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useGoalsStore } from "~/store/goals";
import * as goalAdapter from "~/adapters/goal"
import { GOAL_MOCK } from "~/tests/fixture/goal";
import { goalRepo } from "~/models/Goal";

describe('store/goals', () => {
    beforeEach(() => {
        const pinia = createPinia();
        setActivePinia(pinia)
    })

    afterEach(() => {
        vi.restoreAllMocks();
    })

    describe('add', async () => {
        let spy: SpyInstance;
        beforeEach(async () => {
            spy = vi.spyOn(goalAdapter, 'addGoal')
            expect(spy.getMockName()).toEqual('addGoal')

            spy.mockImplementation(_ => new Promise(resolve => resolve(GOAL_MOCK)))
        })

        test('Should setup adapter mock successfully', async () => {
            expect(await goalAdapter.addGoal({ title: GOAL_MOCK.title })).toEqual(GOAL_MOCK)
        })

        test('Should successfully add goal', async () => {
            const goalStore = useGoalsStore()
            await goalStore.add(GOAL_MOCK)

            expect(goalStore.$state.recentlyCreated.data?.[0]).toBe(GOAL_MOCK.id)
            expect(goalRepo.find(GOAL_MOCK.id)).toEqual(GOAL_MOCK)
        })

        test('Should successfully add two goal in order', async () => {
            const goalStore = useGoalsStore()
            await goalStore.add(GOAL_MOCK)

            spy.mockImplementation(_ => new Promise(resolve => resolve({
                id: 'MOCK_ID_2'
            })))
            await goalStore.add(GOAL_MOCK)

            expect(goalStore.$state.recentlyCreated.data).toEqual(['MOCK_ID_2', GOAL_MOCK.id])
        })
    })
})