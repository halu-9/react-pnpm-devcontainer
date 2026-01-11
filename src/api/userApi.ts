import { logError } from "../utils/logger";

export type User = {
  id: number;
  name: string;
};

export const fetchUsers = async (): Promise<User[]> => {
  try {
    // API叩いてる風のレスポンス遅延
    await new Promise((res) => setTimeout(res, 500)); // Simulate network delay

    // 固定レスポンス
    return [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
  } catch (error) {
    logError(error);
    throw new Error("ユーザー取得失敗");
  }
};
