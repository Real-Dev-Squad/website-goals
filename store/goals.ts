import * as goalAdapter from '~/adapters/goal'
import { type GetGoalQuery } from '~/adapters/goal'
import type { PostGoal } from '~/interfaces/PostGoal'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import type { Goal } from '~/interfaces/Goal'

export interface Filters {
  [key: string]: string,
}

export const useGoalListQuery = (query: GetGoalQuery, options = {}) => {
  const response = useQuery({
    queryFn: () => goalAdapter.fetchGoals(query),
    queryKey: ['goals', 'list', query],
  })

  return response
}

export const useGoalByIdQuery= ({ id }: { id: string }) => {
  const response = useQuery({
    queryFn: () => goalAdapter.fetchGoalById(id),
    queryKey: ['goals', 'detail', id],
  })

  return response
}

export const useAddGoalMutation = () => {
  const queryClient = useQueryClient()
  const response = useMutation({
    mutationFn: ({ goal }: { goal: PostGoal }) => goalAdapter.addGoal(goal),
    onMutate: ({ goal }) => {
      queryClient.setQueryData(['goals', 'list', { page: 1, filters: {} }], (prev: goalAdapter.GoalListResponse) => {
        const newResponse = {
          ...prev,
          result: [
            createTempGoal(goal),
            ...prev.result,
          ]
        }
        return newResponse
      })
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['goals', 'list'] });
    }
  })

  return response;
};

export const useUpdateGoalMutation = () => {
  const queryClient = useQueryClient()
  const response = useMutation({
    mutationFn: ({ goalId, goal } : { goalId: string, goal: PostGoal }) => goalAdapter.updateGoal(goalId, goal),
    onMutate: ({ goalId, goal }) => {
      queryClient.setQueryData(['goals', 'detail', goalId], (prev: Goal) => {
        return {
          ...prev,
          ...goal,
        }
      })

      queryClient.setQueriesData({ queryKey: ['goals', 'list'] }, (prev: any) => {
        const newList = {
          ...prev,
          result: prev.result.map((oldGoal: Goal) => {
            if (oldGoal.id === goalId) {
              return {
                ...oldGoal,
                ...goal,
              }
            }
            return oldGoal
          })
        } as goalAdapter.GoalListResponse
        return newList
      })
    },
    onSettled: (goal) => {
      queryClient.invalidateQueries({ queryKey: ['goals', 'list'] });
      if (goal) queryClient.invalidateQueries({ queryKey: ['goals', 'detail', goal.id] });
    }
  })

  return response
}

export const useDeleteGoalMutation = () => {
  const queryClient = useQueryClient()
  const response = useMutation({
    mutationFn: ({ goalId } : { goalId: string }) => goalAdapter.deleteGoal(goalId),
    onMutate: () => {
      queryClient.invalidateQueries({ queryKey: ['Goals'] });
    }
  })

  return response
}

function createTempGoal (goal: PostGoal) {
  return {
    id: `temp:${Date.now()}`,
    status: 'ongoing',
    createdAt: new Date().toISOString(),
    assignedTo: '',
    description: '',
    title: '',
    percentageCompleted: 0,
    startsOn: undefined,
    endsOn: undefined,
    assignedBy: '',
    createdBy: '',
    ...goal,
  } as Goal
}