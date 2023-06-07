import { MessageType } from '../MessageType';

export type UserState = {
  id: string | null,
  message: MessageType,
  openMessage: boolean,
  isAuth: boolean,
}
