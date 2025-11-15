interface BaseProps {
  userId: number;
  rateTypeId: number;
}
export interface UserSettings extends BaseProps {
  id: number;
}

export type NewUserSettings = BaseProps;
