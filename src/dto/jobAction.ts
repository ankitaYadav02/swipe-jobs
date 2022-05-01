export interface jobActionProps {
  workerId: string;
  jobId: string;
}

export interface JobActionsDto {
  success: boolean;
  message?: string;
  errorCode?: string;
}