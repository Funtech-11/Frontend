type TError404 = {
  id: number;
  errorCode: string;
  errorMessage: string;
};

export const error404: TError404 = {
  id: 1,
  errorCode: '404',
  errorMessage: 'Этой страницы, как и объективной реальности, не существует',
};
