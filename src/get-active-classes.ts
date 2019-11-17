type ConditionalClasses = { [key: string]: any };
type Option = ConditionalClasses | string;

export function getActiveClasses(...classes: Option[]): string {
  return [].concat(...classes).reduce((result, option: Option) => {
    const nextClasses =
      typeof option === "object" ? joinClasses(option) : option;
    return `${result}${result ? " " : ""}${nextClasses}`;
  }, "");
}

function joinClasses(classes: ConditionalClasses) {
  return Object.keys(classes)
    .filter(key => classes[key])
    .join(" ");
}
