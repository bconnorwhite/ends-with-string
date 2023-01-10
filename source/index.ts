import charToString from "char-to-string";

export default function endsWith(input: string | Buffer, string: string) {
  if(string.length > input.length) {
    return false;
  } else {
    return Array.from(string).reduceRight((retval, match, index) => {
      const pointer = (input.length-string.length) + index;
      const char = input[pointer] as string | number;
      return retval && charToString(char) === match;
    }, true);
  }
}
