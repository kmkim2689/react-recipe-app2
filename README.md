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
    * when hovering the properties, **the absolute(acutal) css value** appears


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

> The First thing to do : break the website down into smaller components -> Make Empty Files Below in Advance

* TopNav.js
* Featured.js
* Delivery.js
* TopPicks.js
* Meal.js
* Categories.js
* NewsLetter.js
* Footer.js

### 1.1. TopNav.js

* initial status
```
import React from 'react'

function TopNav() {
  return (
    <div>
    </div>
  )
}

export default TopNav
```

* Tailwind를 활용하여, className에 css 관련 설정들을 해준다.(일반적인 css와는 다른 방식)

```
import React from 'react'

function TopNav() {
  return (
    <div className='max-w-[1520] mx-auto flex justify-between items-center p-4'>
    </div>
  )
}

export default TopNav
```

    * max-w-[1520px] : max width is 1520px
        * **[] is the way to specify a custom value**
        * 직접 단위를 설정하여 사용할 것임을 의미(px, % 등)
        * square bracket 없이 숫자를 사용한다면, tailwind에서 설정한 대로 활용하겠다는 의미이다. 예를 들어 padding의 경우 1당 0.25rem을 의미
    * mx-0 : margin from left to right is auto => 좌우 auto는 좌우 중앙에 정렬함을 의미한다.
    * flex : set display to flex
    * justify-between : justify-content is space-between
    * items-center : set align-items to center
    * p-4 : padding

* Three parts
1. left side
    * hamburger menu button
    * logo
    * Badges
2. center side
    * search box
3. right side
    * cart badge

#### Left Side
* import icons
* install `npm install react-icons`

`import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'`

* render the menu icon
    ```
    {/* display to flex, align-items to center */}
    <div className='flex items-center'>
        {/* when hovering the cursor becomes clickable shape(pointer) */}
        <div className='cursor-pointer'> 
            {/* icon needed */}
            <AiOutlineMenu size={25} />
        </div>
    </div>
    ```

* render the logo
    ```
    <div className='flex items-center'>
        <div className='cursor-pointer'> 
            <AiOutlineMenu size={25} />
        </div>
        {/* specifying the form style */}
        {/* font-size: 1.5rem (24px) line-height: 2rem (32px) */}
        {/* for smaller screen, font size will be 3xl. for larger screen, font size will be 4xl */}
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
            Yum<span>Eats</span>
        </h1>
    </div>
    ```
    * the **size of the logo** will be **dynamic according to the current window size**

* Badges for Free/Delivery btn
    * we want that to be **hidden on smaller devices**
        * use hidden of tailwind

    ```
    <div className='flex items-center'>
        <div className='cursor-pointer'> 
            <AiOutlineMenu size={25} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
            Yum<span>Eats</span>
        </h1>
        {/* for smaller screens that will be hidden, for larger screen display will be flex, align-items to center, background color is  rgb(229 231 235 / var(--tw-bg-opacity), almost circle rounded, padding for all aspects is 0.25rem, fontsize is 14px*/}
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            {/* bg-colorName-thickness */}
            <p className='bg-orange-700 text-white rounded-full p-2 text-bold'>
                Free
            </p>
            <p className='p-2 text-bold'>
                Delivery
            </p>
        </div>
    </div>
    ```

#### Center
```
<div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
    <AiOutlineSearch size={25} />
    {/* https://webdir.tistory.com/342 */}
    <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search Meals' />
</div>
```

#### Right side
* Button for cart
* use <button>
* styles
    * background : orange, density is 700
    * text : white
    * with smaller device, it should be hidden
    * for medium and larger device, display should be flex
    * align-items : center
    * top-bottom padding : 2
    * shape should be rounded(circle rectangular shape)
    * set an icon into the button
    ```
    import { BsFillCartFill, BsPerson } from 'react-icons/bs';
    ```
        * size should be 20

```
{/* for the Cart button(right) */}
<button className='bg-orange-700 text-white sm:hidden md: flex lg:flex items-center py-2 rounded-full'>
    <BsFillCartFill size={20}/>Cart
</button>
```

#### Implement the Side Drawer
* open up the side menu

* variables needed
    * sideNav (boolean) state variable : to define whether the drawer is open or not => initial state should be false
    `const [sideNav, setSideNav] = React.useState(false);`

* on icon click, the sideNav Variable should be reversed
    ```
    <div className='cursor-pointer' onClick={() => setSideNav(!sideNav)}> 
    ```

* set the background for overlay(menu list layout)
    * https://velog.io/@iamhayoung/CSS-Position-Display-Float%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0#2%EF%B8%8F%E2%83%A3-display-%EC%86%8D%EC%84%B1
    * <div>
    * style
        * background should be black, alpha should be 60%(alpha : use slash /) => 메뉴가 보이게 되어도 메인 화면이 보여야 하기 때문에 투명도를 설정
        * position should be fixed(fixed: 브라우저의 전체 화면(viewport)을 기준으로 HTML 요소를 배치. 고정 배치가 적용된 요소는 부모 요소로 부터 완전히 독립되어 다른 요소에 구애받지 않고 화면에 어디든지 원하는 위치에 배치될 수 있습니다. 또한, 고정 배치가 적용된 요소는 다른 요소들이 스크롤링(scrolling)되는 동안에도 지정된 자리에 고정되어 움직이지 않는 특징을 가지고 있습니다. => 스크롤을 해도 항상 같은 위치에 고정)
        * height should be the size of the screen : 높이는 스크린의 사이즈만큼으로 한다. => h-screen
        * z-10 : 10보다 작은 것 보다는 위에 나오고, 10보다 큰 것보다는 아래에 깔려 나온다.
        * top-0, left-0 : fixed position을 활용하므로 활용할 수 있는 속성으로, 위와 왼쪽에 딱 붙어 메뉴가 표시되어야 하므로 설정
        ```
        <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'>
        </div>
        ```

    * if sideNav is true, the layout background should be transparent black, otherwise not
        * 삼항연산자(? :) 활용
        ```
        {sideNav ? <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'>
        </div> : ("")}
        ```

    * create the sideNav layout
        * white colored menu
        * style
            * if sideNav is false, it should go away to the opposite direction it appeared => left should be `-100%(totally gone)` and there needs to be a `duration` for animation(to make it look going away from the screen)
            ```
            <div className={sideNav 
                ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' 
                : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
            }></div>
            ```

    * set the menu items => <nav> + <ul> + <li>
        * icons needed
            * `AiOutlineClose`
                * should be set on the top right of the corner
                * should be clickable(to set the sideNav state variable false)
                * position should be absolute => to set the top and the right(부모 기준으로 위와 오른쪽으로부터 어느정도만큼 떨어뜨릴 것인지 설정)
                * margin right : mr
                * icon should be rounded : rounded-full
        ```
        <nav>
            <ul className='flex flex-col p-4 text-gray-900'>
                <li className='text-xl py-4 flex'>
                    <BsPerson size={25} className='mr-4 text-white bg-black rounded-full' />
                    My Account
                </li>
                <li className='text-xl py-4 flex'>
                    <TbTruckReturn size={25} className='mr-4 text-white bg-black rounded-full' />
                    Delivery
                </li>
                <li className='text-xl py-4 flex'>
                    <MdOutlineFavorite size={25} className='mr-4 text-white bg-black rounded-full' />
                    My Favorite
                </li>
                <li className='text-xl py-4 flex'>
                    <FaGoogleWallet size={25} className='mr-4 text-white bg-black rounded-full' />
                    My Wallet
                </li>
                <li className='text-xl py-4 flex'>
                    <FaUserFriends size={25} className='mr-4 text-white bg-black rounded-full' />
                    Help
                </li>
            </ul>
        </nav>
        ```

* when the area outside the menu layout is clicked, the drawer should be closed
    * set the overlay on click => on click, reverse the sideNav state variable

    ```
    // set "onClick"
    {sideNav ? <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0' onClick={() => setSideNav(!sideNav)}>
    </div> : ("")}
    ```

### 1.2. Featured.js
* Hero Component / Featured Item Component => like a banner
    > A hero is a large banner or image that appears as one of the first items on a page.

* sliders : an array of objects for imageUrls

* currentIndex : current banner index => set it with state variable
`const [currentIndex, setcurrentIndex] = useState(0);`

* views
    * div : for the overall area of the banner. maxwidth is 1520px, height is 500px(fixed) width should be full, padding(top, bottom, start, end) is 1rem, position to be relative
        * div : for the image area => set the image with imageurl using style(background image)
            * bg-center : background position is center
            * bg-cover : background size is cover(fill the container completely => fit in the container)
            * duration-500 : page animation
        * left, right arrows for altering the index
        * bullet to move to any index(indicator) : below the slide

### 1.3. Delivery.js
* headline
    * style
        * text color is orange, density is 500
        * font should be bold
        * text size is 1.5rem, lineheight is 2rem
        * text align should be center
        ```
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
        ```

* grid list
    * style
        * width should be 1520px
        * margin-left & right should be auto(to align the grid list to center)
        * when medium size device, the # of columns should be 2


### 1.4. TopPicks.js
* implement slider

* return the fragment(<></>)
* inside the fragment
    ```
    function TopPicks() {
        return (
            <>
            <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
            {/* slide should be hidden for small devices */}
            <div className='hidden lg:flex max-w-[1520px] m-auto py-2 px-2'>
            {/* use the splide */}
            {
                // item : represents each item in the topPicks array
                topPicks.map((item) => {
                return (
                    // position relative to allow absolute positioning of the title
                    <div key={item.id} className='rounded-3xl relative'>
                    {/* parent div position is relative -> inner div position to be absolute : to place on the top of the parent div */}
                    <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                        {/* title :  */}
                        <p className='px-2'>{item.title}</p>
                    </div>
                    <img src={item.img}></img>
                    </div>
                );
                })
            }
            </div>
            </>
        )
    }

    ```
    * 이 상태에서는 요리들이 제대로 표출되지 못하고 있다. 아이템의 너비가 이미지의 본래 너비만큼만 나오기 때문에 제각각으로 나오며 이미지가 rounded된 아이템 컨테이너를 벗어나서 표추되는 모습을 보인다.

    * 해결 방안 : stylize
        * img에 스타일 설정
            * height를 200px로 설정하여, 모두 동일한 높이를 가지도록 한다
            * width를 full로 설정하여, 아이템 영역의 너비를 모두 채우도록 한다.
            * object-fit를 cover로 하여 이미지의 본래 비율을 지켜 표출되도록 한다. 대신 잘리는 부분이 발생
            * border-radius를 컨테이너와 동일하게 설정함으로써, 이미지가 컨테이너로부터 빠져나오지 않도록 한다.(3xl)
    * 아이템 컨테이너에 대한 추가 조치
        * hover 이벤트 발생 시 크기를 1.05배 키움
        * 애니메이션은 easeout
        * 300ms동안 지속되도록 한다

* Wrap the "mapped list" with <Splide>
    * <Splide> component
    * wrap it with the list(map)
    * set up the options
        * 한 번에 보이는 아이템의 개수는 4개 => perPage
        * 아이템 간 간격 => gap
        * 스크롤을 자유자재로(아이템 단위가 아닌 사용자가 원하는 만큼 드래그 하는 만큼만 드래그되도록) => drag: free
        * splide에서 기본적으로 제공되는 좌우 화살표 제거 => arrows: false

* Wrap each item with <SplideSlide>

```
function TopPicks() {
  return (
    <>
    <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
    {/* slide should be hidden for small devices */}
    <div className='hidden lg:flex max-w-[1520px] m-auto py-2 px-2'>
      {/* use the splide */}
      <Splide options={{perPage: 4, gap: "0.5rem", drag: 'free', arrows: false}}>
      {
        // item : represents each item in the topPicks array
        topPicks.map((item) => {
          return (
            <SplideSlide key={item.id}>
              {/* position relative to allow absolute positioning of the title */}
            <div className='rounded-3xl relative'>
              {/* parent div position is relative -> inner div position to be absolute : to place on the top of the parent div */}
              <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                {/* title :  */}
                <p className='px-2'>{item.title}</p>
                <button className='border-dotted border-white text-white mx-2 absolute bottom-4'>Add To Cart</button>
              </div>
              <img className='h-[200px] w-full object-cover rounded-3xl hover:scale-105 ease-out duration-300' src={item.img}></img>
            </div>
            </SplideSlide>
            
          );
        })
      }
      </Splide>
      
    </div>
    </>
  )
}
```

### 1.5. Meal.js

* display the items with grid column
    * display : grid
        * medium screen size : 2 columns per row
        * smaller screen size : 1 column per row
        * larger screen size : 6 column per row
    * use mealData in data.js => map
    * the info of the meal
        * margin-top : mt
            * 본래 margin-top은 부모 요소의 맨 위로부터 아래로 떨어진 정도를 나타낸다. 다만, 음수로 설정한다면 맨 위로부터 위로 떨어진 정도를 나타낸다
            * -mt-10 : 부모 요소의 맨 위를 뚫고 10만큼 나온다는 의미
    * button for heading to detail page
        * heroicons import하기

        ```npm install @heroicons/react```
        ```import { ArrowSmRightIcon } from '@heroicons/react/outline```

        * 문제점 : icon이 import되지 않음
            * 해결책 : 라이브러리 downgrade하기
            * package.json 파일에서 heroicons 관련 dependency 삭제
            * 그 후, 1.x 버전을 다시 설치
            ```npm i @heroicons/react@1.0.6```

    * button for showing meal items by category
        * styling
        ```
        {/* buttons for showing items by category */}
        <div className='flex flex-col lg:flex-row justify-center mb-6'>
            <div className='flex justify-center md:justify-center'>
                {/* buttons */}
                <button className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>All</button>
                <button className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Pizza</button>
                <button className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Chicken</button>
                <button className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Salad</button>
            </div>
        </div>
        ```

        * filtering action : useState hook
            * 초기에는 전체 item을 표출하다가, filter될 때 setState 함수를 활용해 변경

            ```const [meals, setMeals] = useState(mealData);```

            * filtering function
            ```
            // filter items by category
            const filterCategory = (category) => {
                setMeals(
                    mealData.filter((item) => {
                        return item.category === category
                    })
                )
            }
            ```

            * set onClick on each button
            ```
            {/* buttons */}
            <button onClick={() => setMeals(mealData)} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>All</button>
            <button onClick={() => filterCategory("pizza")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Pizza</button>
            <button onClick={() => filterCategory("chicken")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Chicken</button>
            <button onClick={() => filterCategory("salad")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Salad</button>
            ```

### 1.6. Categories.js

* top categories
* map through the categories and have them displayed on the screen

```
function Categories() {
    
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Trending Categories</h1>

        <div className='grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2'>
            {
                categories.map((item) => {
                    return (
                        <div className='p-4 flex justify-center items-center hover:scale-105 duration-300' key={item.id}>
                            <img className='w-40 h-10 object-cover rounded-xl cursor-pointer shadow-xl' src={item.image} alt={item.name} />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
```