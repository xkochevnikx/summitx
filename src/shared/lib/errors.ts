import { AxiosError } from "axios";

export class AuthorizatoinError extends Error {
    constructor(message = "AuthorizatoinError") {
        super(message);
    }
}

export class NeedAuthError extends Error {
    constructor(message = "NeedAuthError") {
        super(message);
    }
}

export class BadRequest extends Error {
    constructor(message = "BadRequest", cause?: unknown) {
        super(message, { cause });
    }
}

export const isAxiosCustomError = (error: unknown): void => {
    error instanceof AxiosError
        ? console.error(new BadRequest(error.message, { cause: error }))
        : console.error(new BadRequest("Unknown error occurred", { cause: error }));
};

export class ParsingError extends Error {
    constructor(
        public source: string,
        message = "ParsingError",
        cause?: unknown,
    ) {
        super(message, { cause });
    }
}

export class ValidationError extends Error {
    constructor(
        public errors: unknown[],
        message = "ValidationError",
    ) {
        super(message);
    }
}
