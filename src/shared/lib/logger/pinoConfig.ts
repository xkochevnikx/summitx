import Pino from "pino";

export const logger = Pino({
    formatters: {
        level: (label) => {
            return { level: label.toUpperCase() };
        },
        bindings: (bindings) => {
            return { id: bindings.pid, host: bindings.hostname };
        },
    },
    timestamp: () => {
        const date = new Date();
        const formattedDate = date.toLocaleString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
        return `,"time":"${formattedDate}"`;
    },
});
