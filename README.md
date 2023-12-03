## Recipe App

### Reference
[React Crash Course | Build A Full Recipe App | Reactjs Tutorial | React Project 2023](https://youtu.be/AcpP5Kca60c?feature=shared)

### CSS Utility Framework - Tailwind CSS
* [Tailwind](https://tailwindcss.com/)
* makes it easy to style the application

#### How to Install & Initialize
> https://tailwindcss.com/docs/installation

1. terminal installation
`npm install -D tailwindcss`

2. initialize the tailwind by typing:
`npx tailwindcss init`
> terminal : Created Tailwind CSS config file: tailwind.config.js
* result : src > **tailwind.config.js file generates**

3. configure the template paths in tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

> *와 **는 일반적으로 파일 경로 패턴이나 파일 검색에서 사용되는 와일드카드입니다. 다음은 두 와일드카드의 주요 차이점입니다.
>
> `*` (단일 와일드카드):
>
> `*`는 하나의 디렉토리 레벨에서 사용됩니다.
> 예를 들어, "/*.txt"는 루트 디렉토리에서 모든 .txt 파일을 나타냅니다.
> "src/*.js"는 "src" 디렉토리에서 모든 .js 파일을 나타냅니다.
>
> `**` (이중 와일드카드):
> 
> `**`는 하나 이상의 디렉토리 레벨에서 사용됩니다.
> 예를 들어, "src/**/*.js"는 "src" 디렉토리와 그 하위 모든 디렉토리에서 모든 .js 파일을 나타냅니다.
> `**`는 재귀적으로 모든 하위 디렉토리를 검색하는 역할을 합니다.
> 간단히 말하면, *는 현재 디렉토리 레벨에서의 와일드카드이며, **는 하위 디렉토리를 재귀적으로 검색하는 데 사용되는 와일드카드입니다. 이러한 와일드카드는 주로 명령행이나 파일 시스템과 관련된 작업에서 자주 사용됩니다.

4. configure index.css
* to add the tailwind directives to the css
* add the `@tailwind` directives for each of tailwind's layers to the main css file
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    // remove all the codes except above
    ```

5. create a base CSS -> index.css file(already exists)
* Global CSS File
* All the components(buttons etc...) will follow the same pattern
    #### How to do that?
    * add `@layer`

* cf) tailwind extension : Tailwind Intellisense
    * Plugin > tailwind css intellisense
    * autocomplete
    * when hovering the properties, the absolute css value appears


### Clean up the boilerplate codes
* Delete unnecessary files to build the app
* things to remain
    * src > App.js, index.css, index.js
    * remote the codes related to deleted files(import ~~)

### What to Build in this Project
1. Navigation Component
* Icon to toggle the navigation
    * Drawer...
* Logo
* Badge(Free/Delivery)
* Searchbox
* Cart

2. Carousel
* Banner(Slidable)

3. Description

4. Top Picks
* Carousel

5. Meals

6. Trending Categories

7. News

8. Footer

### How to Implement?
* `breaking down` the application into `small components`

---

## 1. Components => according to the section of "What to Build in this Project"

### Create a new folder in src, 'components'
* src > components

> The First thing to do : break the website down into smaller components -> Make Files Below in Advance

### 1.1. TopNav.js
* For Navigation Component
* src > components > TopNav.js
### 1.2. Featured.js
* Hero Component / Featured Item Component => like a banner
    > A hero is a large banner or image that appears as one of the first items on a page.
### 1.3. Delivery.js
### 1.4. TopPicks.js
### 1.5. Meal.js
### 1.6. Categories.js
### 1.7. NewsLetter.js
### 1.8. Footer.js

