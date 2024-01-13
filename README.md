# Electronic Ecommerce

## Product Listing Page

I separate the page into two main components: `Products` and `ProductList`. The `Products` component acts as the container, combining the `FilterSection` and `ProductList`. The `ProductList` component handles the rendering of the product grid and displays the products with their names, prices, and images.

The `FilterSection` is for the sorting mechanism. I used the `useFilterContext` hook to access the filtered products and sorting preferences. Filtered products are for searching the product's name.

## Product Details Page

I used the `useParams` hook from `react-router-dom` to extract the product ID from the URL. This ID is then used to fetch detailed product information using the `getSingleProduct` function from the product context with Axios.

I've also included a breadcrumb-style navigation bar (`PageNavigation`) at the top to guide users.

The main content section is divided into two columns. The left column (`product_images`) displays product images using the `MyImage` component. It fetches images and handles responsive display.

The "Add to Cart" section includes a button that triggers the `addToCart` function from the cart context. It also uses the `AddToCart` component, allowing users to adjust the quantity before adding the product to their cart.

## Summary

For this assignment, I chose to use ReactJS to build the components, manage the state, and handle the UI and `react-router-dom` to handle navigation between different pages. I feel more comfortable and confident using them due to my existing skills and experiences.

Given my exposure to the Context API with `useReducer` during my trainee time, I chose it for state management.

For styling, I chose styled components because it allows writing CSS within JavaScript, and reusable styled components to manage styles for individual components. For icons, I used `react-icons` to easily set up and include a lot of icons. I also used `styled-components` along with `framer-motion` for loading animation. Even though my experience with animation is limited, I just wanted to explore this area further.

For state management, I have chosen to utilize the Context API from React. The Context API, coupled with the `useReducer` hook, provides a straightforward and efficient way to manage state within the application. I have created contexts dedicated to managing product data, sorting preferences, and cart updates.

To ensure a responsive design, I've structured the components and styles to prioritize mobile users, and then I've used media queries for the larger screens layout. I used styled components for responsive design because of its flexibility. Media queries are implemented to adjust styling based on the screen size.

I have followed best practices for HTML semantics, ensuring that the document structure is meaningful and properly labeled using appropriate tags like `<nav>`, `<section>`, and `<article>`. Also, I've checked that keyboard navigation is supported throughout the application.
