type FormatOptions = {
  dateOptions?: Intl.DateTimeFormatOptions;
  timeOptions?: Intl.DateTimeFormatOptions;
  dateTimeOptions?: Intl.DateTimeFormatOptions;
};

export const useFormatted = (config?: FormatOptions) => {
  const formatDate = (
    date: string | Date,
    options?: Intl.DateTimeFormatOptions,
    dateLocale: string = "en-US",
  ) => {
    const d = new Date(date);

    return d.toLocaleDateString(
      dateLocale,
      options ??
        config?.dateOptions ?? {
          year: "numeric",
          month: "short",
          day: "2-digit",
        },
    );
  };

  const formatTime = (
    date: string | Date,
    options?: Intl.DateTimeFormatOptions,
    timeLocale: string = "en-US",
  ) => {
    const d = new Date(date);

    return d.toLocaleTimeString(
      timeLocale,
      options ??
        config?.timeOptions ?? {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        },
    );
  };

  const formatDateTime = (
    date: string | Date,
    options?: Intl.DateTimeFormatOptions,
    dateTimeLocale: string = "en-US",
  ) => {
    const d = new Date(date);

    return d.toLocaleString(
      dateTimeLocale,
      options ??
        config?.dateTimeOptions ?? {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        },
    );
  };

  return {
    formatDate,
    formatTime,
    formatDateTime,
  };
};
