# suui development notes

## Sass basic syntax

### `!default`

```scss
$white: #fff !default;
```

表示仅当 `white` 变量未被定义或值为 `null` 时才会使用默认值。

### `darken($color, $amount)`

降低颜色的亮度, `$amount` 的值在 0% ~ 100%

### `lighten($color, $amount)`

使颜色变浅， `$amount` 的值在 0% ~ 100%

### Placeholder Selectors

Sometimes you want to write a style rule that’s only intended to be extended. In that case, you can use placeholder selectors, which look like class selectors that start with % instead of `.` .

### mixin

```scss
// 定义
@mixin mixinName() {}


// 使用
body {
  @include mixinName();
}
```

### maps

```scss
$icons: ("eye": "\f112", "start": "\f12e", "stop": "\f12f");

@each $name, $glyph in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
  }
}

```

## 组件库样式变量分类

### 基础色彩系统

- 系统色板：基础色板 + 中性色板
- 产品色板：品牌色 + 功能色板

### 字体系统

### 表单

### 按钮

### 边框和阴影

### 可配置开关

### Others

### `currentColor`

表示当前文字的颜色

```css
background-color: currentColor;
```

### `pointer-events`

```css
pointer-events: none; /* 禁止指针事件 */
```