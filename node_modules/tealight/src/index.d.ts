export as namespace tealight;

export = tealight;

declare function tealight(
  target: string | HTMLElement | HTMLCollection | Array<any>,
  context?: HTMLElement
): Array<HTMLElement>;
