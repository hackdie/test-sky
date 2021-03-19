import maskify from "./challenge-one";
import calculate from "./challenge-three";
import numberToOrdinal from "./challenge-two";
import { withMessageOrError } from "./utils";

withMessageOrError(maskify, "5234123412349876");
withMessageOrError(maskify, "123456");

withMessageOrError(numberToOrdinal, 0);
withMessageOrError(numberToOrdinal, 1);
withMessageOrError(numberToOrdinal, 2);
withMessageOrError(numberToOrdinal, 3);
withMessageOrError(numberToOrdinal, 10);
withMessageOrError(numberToOrdinal, 12);
withMessageOrError(numberToOrdinal, 21);
withMessageOrError(numberToOrdinal, 22);
withMessageOrError(numberToOrdinal, 111);
withMessageOrError(numberToOrdinal, 121);

withMessageOrError(calculate, "");
withMessageOrError(calculate, "-");
withMessageOrError(calculate, "1 2 &");
withMessageOrError(calculate, "1 2  &");
withMessageOrError(calculate, "3");
withMessageOrError(calculate, "3 4 +");
withMessageOrError(calculate, "2 9 5 + -");
withMessageOrError(calculate, "5 10 2 * /");
withMessageOrError(calculate, "0 1 0 / *");
