export interface ErrorObject {
  error: InnerError;
}

interface InnerError {
  exception: [
    message: {
      message: string;
    }
  ];
}
