export class DuplicateUserEmailError extends Error {
  constructor() {
    const DUPLICATE_ERROR: string = "User existed!";
    super(DUPLICATE_ERROR);
  }
}

export class NotExistedUserError extends Error {
  constructor() {
    const USER_NOT_EXISTED_ERROR: string = "User not found!";
    super(USER_NOT_EXISTED_ERROR);
  }
}
