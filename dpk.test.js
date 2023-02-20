const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");
describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the a valid key if given event without partitionKey", () => {
    const data = { data: "whatever" };
    const expectedKey = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(data))
      .digest("hex");
    const trivialKey = deterministicPartitionKey(data);
    expect(trivialKey).toEqual(expectedKey);
  });

  it("Returns a valid partitionKey if the partitionKey is provided and not a string", () => {
    const partitionKey = ["Hello", "ClipBoard"];
    const data = { partitionKey: partitionKey };
    const expectedKey = JSON.stringify(partitionKey);
    const trivialKey = deterministicPartitionKey(data);
    expect(trivialKey).toEqual(expectedKey);
  });

  it("Returns a valid partitionKey if provided and  it's length is bigger than 256", () => {
    const partitionKey =
      "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a8622";
    const data = { partitionKey: partitionKey };
    const trivialKey = deterministicPartitionKey(data);
    expect(trivialKey.length).toBeLessThanOrEqual(256);
  });
});
