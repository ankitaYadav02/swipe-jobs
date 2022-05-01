export interface jobActionProps {
  workerId: string;
  jobId: string;
}

export interface JobActionsResponse {
  success: boolean;
  message?: string;
  errorCode?: string;
}