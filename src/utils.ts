const sleep = (ms: number): Promise<string> =>
  new Promise((resolve: (a: string) => void) => {
    setTimeout(() => {
      resolve("");
    }, ms);
  });

export { sleep };
