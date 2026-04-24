# Gamehub - A Game Library

An engaging online library for discovering and supporting game developers. Users can browse indie games, see detailed information, and install if you like them.

---

## Ensure the Following Things to Get 100% Mark

- **GitHub Commits**: Include at least 10 meaningful commits with descriptive messages.
- **Readme.md**: Include a README file with the project name, purpose, live URL, key features, and any npm packages you have used.
- **Responsiveness**: Ensure the website is fully responsive on mobile, tablet, and desktop.
- **Environment Variables**: Secure Firebase configuration keys using environment variables.
- **Unique Design**: Create a vibrant, urban-themed UI with emphasis on user engagement.
- **Host your Application**: You can host deployment systems like Netlify, surge, and Firebase. As you develop a single-page application ensure that the page doesn't throw any error on reloading from any routes.
- **Add authorized domain to Firebase**: If you use Netlify / surge

---

## Main Requirements

### Layout Structure

The website consists of a single layout for all the pages, a header, a footer and main content. For all the pages, header and footer will be the same, just the main content will change. If you want you can define a different layout for the 404 page.

### Navbar/Header

- The navbar will have a logo on the left side, and on the right side links to different pages of the website.
- Login and Registration links should also be there.
- If the user is logged in then hide the Login and Registration link and show the users profile picture and logout.
- Clicking profile picture takes the user to the My Profile page.

---

## JSON Data Generation

The JSON data will have the following properties. You can use any AI tools to generate the JSON data.

```json
{
  "id": "1",
  "title": "Player Unknowns Battle Ground: PUBG",
  "coverPhoto": "https://example.com/images/pubg.png",
  "category": "FPS",
  "downloadLink": "https://www.pubgmobile.com/en-US/home.shtml",
  "description": "PUBG Mobile is a fast-paced battle royale game where players fight for survival, strategy, and victory on dynamic maps.",
  "ratings": "4.5",
  "developer": "Krafton"
}
```

---

## Homepage

This page will have multiple sections such as banner, popular games section, newsletter section.

### Banner

- Banner will be a slider with minimum 3 slides which displays some game images

### Popular Games Section

- This section will show at-least 3 games sorted by their rating.
- The games will be shown in a card layout.
- The card contains game cover photo, title and any other information you like about the game.
- Clicking on a card will open the game details page.

### Newsletter Section

- Do some research on google how a newsletter section looks and works and then add it in the homepage

---

## Game Details Page (Protected Page)

This page will contain all the details about the game that is available in the JSON. This page will be a protected page. If the user is not logged in then the user will be redirected to the login page.

---

## Authentication

### Login Page

When you click the login button on the navbar /protected routes it redirects to the login page.

You have to use a password and email-based authentication to log in. The login page will have:

- Email
- Password
- Google login
- A link that will redirect to the Register page

### Register Page

You have to use a password and email-based authentication to register. The Register page will have the following:

- Name
- Email
- photoURL
- Password
- A Link that will redirect to the login page
- Google Login

### Password Verification Requirements

- Must have an Uppercase letter in the password
- Must have a Lowercase letter in the password
- Length must be at least 6 character

### Forgot Password

- Make your forgot password feature functional.
- Redirect the user to the forget password route by clicking forget password.
- Which will contain a form with an email field and a reset password button.
- If a user fills in the email input on the login page, show the email also in the forget password form.
- On clicking the reset button, redirect the user to Gmail.

---

## Other Requirements

### 404 Page

- Create a 404/Not Found page.

### Additional Routes

- Create 1 additional route based on the website theme.

### Dynamic Title

- The tab title should change based on which page the user is in.

### Challenges - Animation Library

Implement any of the following animation library:

- Motion (Formerly Framer Motion)
- Gsap
- React Spring

---

## Update Information Feature

In my-profile route, there will be an update button. On clicking it:

- Take the user to another route
- Show the user a form with 2 input fields (photo-URL and Name)
- An Update Information button
