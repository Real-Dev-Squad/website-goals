export interface ErrorApiNotFound {
  status: 404
  error: 'Not Found'
  message: string
}

export interface ErrorApiUnauthorized {
  status: 401
  error: 'Unauthorized'
  message: string
}

export interface ErrorApiForbidden {
  status: 403
  error: 'Forbidden'
  message: string
}

export interface ErrorApiUnavailable {
  status: 503
  error: 'Service Unavailable'
  message: string
}

export interface ErrorApiBase {
  status: number
  error: string
  message: string
}
