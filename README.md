# eShopNetwork

This project was created for a thrid semester programming course at Tallinn University of Technology. Our team decided to develop something similar to a craigslist or ebay. We had lots of help from online resources like PluralSight and Devsprout.io.

Technologies used: Node.js, Express.js, Google Maps API, Passport.js, MongoDB, CSS, HTML, EJS, Facebook API, Ajax, Mocha, Chai, Supertest.

## Check it out at http://eshopnetwork.herokuapp.com/

## Installation

```sh
$ git clone git@github.com:degawl/eshopnetwork.git
$ cd eshopnetwork
Configure local MongoDB in app.js
add API Keys for

  CLOUDINARY_API_KEY
  CLOUDINARY_API_SECRET
  FB_APP_ID
  FB_APP_SECRET
  GOOGLE_MAPS_API_KEY
  DATABASE_URI
  MAILGUN_KEY
  
$ npm install
$ mongo
$ nodemon
```

## Usage

- Create either a local user of sign in with Facebook.
- Reset user password if you forget with Mailgun.
- See latest posts.
- Upload a picture of the item your trying to sell.
- Add the location of the post.
- See other users' posts and locations.
- Find posts based on your location.
- Find posts based on your desired category.
- Comment on other users' posts.
- See other users' profiles.
- Customize your own profile.
