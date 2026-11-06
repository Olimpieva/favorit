export const errors = {
  network: "Не удалось подключиться к серверу. Проверьте соединение и попробуйте позже.",
  400: "Некорректный запрос. Проверьте введённые данные.",
  401: "Ошибка авторизации.",
  403: "Доступ запрещён.",
  404: "Запрашиваемый ресурс не найден.",
  429: "Слишком много запросов. Попробуйте позже.",
  500: "Произошла ошибка на сервере. Попробуйте позже.",
};

export const transformApiError = error => {
  const status = error.originalStatus ?? error.status;
  const message = error.data?.error
    ? String(error.data.error)
    : error.status === "FETCH_ERROR"
      ? errors.network
      : errors[status] || errors[500];

  return { ...error, message };
};
