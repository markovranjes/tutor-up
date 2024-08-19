import crypto from "crypto";

export const hashPassword = (plainPassword) => {
  return crypto.createHash("sha256").update(plainPassword).digest("hex");
};
