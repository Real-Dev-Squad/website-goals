export interface ApiResponse<SuccessResponse, ErrorResponse> {
  data?: SuccessResponse
  error?: ErrorResponse
}
