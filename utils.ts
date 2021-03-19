const { log } = console;

export const withMessageOrError = (func: any, ...props) => {
  try {
    log(func(...props));
  } catch (err) {
    console.log(`silence error: ${err.message} with with props ${props}`);
  }
};
