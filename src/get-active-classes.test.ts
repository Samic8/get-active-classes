import { getActiveClasses } from "./get-active-classes";

describe("TESTING getActiveClasses", () => {
  describe("GIVEN an empty object", () => {
    it("THEN returns a empty string", () => {
      expect(getActiveClasses({})).toBe("");
    });
  });

  describe("GIVEN an object with boolean values", () => {
    it("THEN includes keys in return value (space separated) that have truthy values", () => {
      expect(
        getActiveClasses({
          "is-here": true,
          "is-here-two": 1,
          "is-not-here": 0,
          "is-really-not-here": false
        })
      ).toBe("is-here is-here-two");
    });
  });

  describe("GIVEN an array of strings", () => {
    it("THEN returns the same strings space separated", () => {
      expect(
        getActiveClasses([
          "is-here",
          "is-here-two",
          "is-not-here",
          "is-really-not-here"
        ])
      ).toBe("is-here is-here-two is-not-here is-really-not-here");
    });
  });

  describe("GIVEN an array of strings and objects", () => {
    it("THEN returns strings and the keys in the objects that have a truthy value", () => {
      expect(
        getActiveClasses([
          "is-here",
          "is-here-two",
          {
            "obj-is-here": true,
            "obj-is-here-two": 1,
            "obj-is-not-here": 0,
            "obj-is-really-not-here": false
          },
          "is-not-here"
        ])
      ).toBe("is-here is-here-two obj-is-here obj-is-here-two is-not-here");
    });
  });

  describe("GIVEN multiple parameters", () => {
    it("THEN returns strings and the keys in the objects that have a truthy value", () => {
      expect(
        getActiveClasses(
          "hi",
          {
            more_hello: true,
            heaps_of_hello: false
          },
          [
            "is-here",
            "is-here-two",
            {
              "obj-is-here": true,
              "obj-is-here-two": 1,
              "obj-is-not-here": 0,
              "obj-is-really-not-here": false
            },
            "is-not-here"
          ]
        )
      ).toBe(
        "hi more_hello is-here is-here-two obj-is-here obj-is-here-two is-not-here"
      );
    });
  });
});
