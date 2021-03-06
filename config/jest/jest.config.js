import '@testing-library/jest-dom';

module.exports = async () => {
  console.log(`Running ${process.cwd()}/jest.config.ts`);
  console.log(`Running ${process.cwd()}/jest.config.ts`);
  console.log(`Running ${process.cwd()}/jest.config.ts`);
  console.log(`Running ${process.cwd()}/jest.config.ts`);
  //add in what you need to do here
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  global.matchMedia =
    global.matchMedia ||
    function () {
      return {
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    };
};
