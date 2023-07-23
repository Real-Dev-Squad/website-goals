import { API } from '../../constants/api'
import { rest } from 'msw'

export const goalsHandlers = [
  rest.get(`${API.GOAL_BASE_URL}/goal/`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: '1',
            attributes: {
              assigned_by: '',
              assigned_to: '0ujQy59TVrdoKgR1PKFp',
              created_at: '2023-06-22T00:08:38.695783Z',
              created_by: '',
              description: '',
              ends_on: null,
              percentage_completed: 20,
              starts_on: null,
              status: 'COMPLETED',
              title: 'Test Goal Site Ok'
            }
          }
        ]
      })
    )
  })
]
