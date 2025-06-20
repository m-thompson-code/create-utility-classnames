import { expect, test } from "vitest";
import { GenerateStyles } from "./generate-styles";
import { input as inputRegular } from "./samples/input-regular";
import { output as outputRegular } from "./samples/output-regular";
import { input as inputPinkPurple } from "./samples/input-pink-purple";
import { output as outputPinkPurple } from "./samples/output-pink-purple";

test("results in regular output", () => {
    expect(GenerateStyles(inputRegular)).toStrictEqual(outputRegular);
});

test("results in pink purple output", () => {
    expect(GenerateStyles(inputPinkPurple)).toStrictEqual(outputPinkPurple);
});
