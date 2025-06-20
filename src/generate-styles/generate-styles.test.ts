import { expect, test } from "vitest";
import { GenerateStyles } from "./generate-styles";
import { input as inputRegular } from "../samples/input-regular";
import { output as outputRegular } from "../samples/output-regular";
import { input as inputRedMediumNoIconOutlier } from "../samples/input-red-medium-no-icon-outlier";
import { output as outputRedMediumNoIconOutlier } from "../samples/output-red-medium-no-icon-outlier";
import { input as inputPinkPurple } from "../samples/input-pink-purple";
import { output as outputPinkPurple } from "../samples/output-pink-purple";
import { input as inputLineHeight } from "../samples/input-line-height";
import { output as outputLineHeight } from "../samples/output-line-height";

test("results in regular output", () => {
  expect(GenerateStyles(inputRegular)).toStrictEqual(outputRegular);
});

test("results in red medium no icon outlier output", () => {
  expect(GenerateStyles(inputRedMediumNoIconOutlier)).toStrictEqual(
    outputRedMediumNoIconOutlier,
  );
});

test("results in pink purple output", () => {
  expect(GenerateStyles(inputPinkPurple)).toStrictEqual(outputPinkPurple);
});

test("results in line height output", () => {
  expect(GenerateStyles(inputLineHeight)).toStrictEqual(outputLineHeight);
});
