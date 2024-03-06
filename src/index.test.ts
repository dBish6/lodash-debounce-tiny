import debounce from ".";

describe("debounce Function", () => {
  jest.useFakeTimers();

  it("Delays invoking a function call.", () => {
    const mockFn = jest.fn(),
      debouncedFn = debounce(mockFn, 500);

    debouncedFn();
    debouncedFn();
    debouncedFn();
    jest.advanceTimersByTime(500); // Fast Forwards

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
