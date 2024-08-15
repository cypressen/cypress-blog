---
title: 'useContext in Astro'
pubDate: 2024-08-13 20:34:11
tags: ['Astro','React']
cover: https://ooo.0x0.ooo/2024/05/25/OJg0Dc.jpg
# sticky: true
categories:  ['CS','Astro']


---

# undefined issue

在astro集成react后，用react组件和astro组件混合构建页面的RootLayout，该layout是一个astro组件

我在如下的RootLayout结构遇到该问题

```html
---
import ButtonTest from './ButtonTest'
import { ThemeProvider } from './ThemPovider'
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <ThemeProvider client:load>
      <ButtonTest />
    </ThemeProvider>
  </body>
</html>

```

简单描述一下就是

```html astro FIle
<body>
    <Provider>
    	<ReactCommponentUsedContext />
    </Provider>
</body>
```

`Provider`和`ReactCommponentUsedContext`均为React组件

```react ThemeProvider
import { useState, createContext } from 'react'
interface ThemeContextType {
  theme: string
  setTheme: (theme: string) => void
}
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

```

```react ButtonTest
import { ThemeContext } from './ThemPovider'
import { useContext } from 'react'

const ButtonTest = () => {
  const { theme, setTheme } = useContext(ThemeContext)!
  return <button onClick={() => setTheme('dark')}>{theme}</button>
}

export default ButtonTest

```

这放在react项目中能够正常运行，但是在astro中，会因为其astro组件和react组件渲染模式差异导致上下文变量（例中的`ThemeContext`）无法预期初始化。

导致`ReactCommponentUsedContext`组件（例中的`ButtonTest`）从`ThemeContext`读取到undefined

> Astro组件和React组件的默认渲染模式分别如下：
>
> 1. **Astro组件**：
>    - **默认渲染模式**：静态渲染。Astro在构建时将组件渲染为静态HTML文件，适合生成静态内容。
> 2. **React组件**：
>    - **默认渲染模式**：客户端渲染。React组件通常在客户端使用JavaScript动态生成和更新DOM，适合处理动态交互。
>
> 总结：
>
> - Astro组件默认是静态渲染。
> - React组件默认是客户端渲染。

# solution

问题就在于两类组件不是同一渲染模式，那么将RootLayout变形为react组件可以解决问题，或者把body里面的内容抽离出来作为一个react组件，再嵌入RootLayout



