import { customAlphabet } from "nanoid";

export default function getId(options: {
  /**
   * @param {string} If prefix = "u-" IDs will be something like: u-a487t6grede...
   * @description getId({ prefix: \`u-${Date.now()}\` })
   * */
  prefix?: string;
  /**
   * @param {number} How many chars to use. Default is 14
   * @description 14
   * */
  count?: number;
  /**
   * @param {string} Chars to use. Default is A-z0-9_
   * @description 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_
   * */
  chars?: string;
}): string {
  let prefix = options?.prefix || "";
  let chars =
    options?.chars ||
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
  let count = options?.count || 14;

  // some math to check probability of collision
  // https://zelark.github.io/nano-id-cc/

  return `${prefix}${customAlphabet(chars, count)()}`;
}
