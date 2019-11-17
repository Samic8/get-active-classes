## getActiveClasses ![Build Status](https://github.com/samic*/get-active-classes/workflows/test/badge.svg)

> Javascript conditional class utility

### Installation

```
yarn add get-active-classes
```

### Usage

```js
// React functional component
import { getActiveClasses } from "get-active-classes";

const MenuItemFocus = ({
  orientation,
  forceActive,
  withTransition,
  className
}) => (
  <div
    className={getActiveClasses("menuItemFocus", className, {
      "menuItemFocus--vertical": orientation === "vertical",
      "menuItemFocus--horizontal": orientation === "horizontal",
      "menuItemFocus--active": forceActive,
      "menuItemFocus--withTransition": withTransition
    })}
  ></div>
);
```

So if the component had the props of

```js
<MenuItemFocus
  orientation="vertical"
  forceActive={true}
  withTransition={false}
  className="widthFull"
/>
```

the resulting HTML will be

```html
<div
  class="menuItemFocus widthFull menuItemFocus--vertical menuItemFocus--active"
></div>
```

Find detailed write up of the motivation behind this utility [on my blog](https://www.samdawson.dev/article/reacts-missing-conditional-class-utility).
