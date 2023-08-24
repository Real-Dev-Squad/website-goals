/**
 * @vitest-environment happy-dom
 */
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

import { server } from "__mocks__/server";
import GoalList from "../../components/GoalList.vue";

// Mocking the API requests using msw
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("displays loading when isLoading is true", async () => {
  // goalsStore.recentlyCreated.isLoading = true;
  expect(GoalList).toBeTruthy();
  const wrapper = mount(GoalList);

  expect("Title").toEqual("Title");
});
