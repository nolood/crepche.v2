import { MessageType } from '../MessageType';

export type UserState = {
  id: string | null,
  message: MessageType,
  openMessage: boolean,
  isAuth: boolean,
  activeCategory: { title: string, id: string } | null,
  activeSubCategory: { title: string, id: string } | null,
  sorting: {
    sortBy: string,
    title: string,
  }
}
