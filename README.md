# Social-API

  ## Description
    Social networks are commonly used in todays age, with most internet users having at least one account on a social platform
    This project is made to create a usable API for a social network application to handle unstructured data
    This project creates a API backend for a website to be able to handle users, thougths, and reactions for a social media component
    This project helped me learn how to create a noSQL database with functionality

  ## Table of Contents
-[Install](#install)

-[Usage](#usage)

-[License](#license)


  ## Installation
  Copy the codebase into an empty file from which you would like to run the application. In your console, from the root folder of the application, run npm install to install the required packages.

  ## Usage
  From your console, while in the root folder of the application, run "npm run start" After, use whatever API testing appliaction you prefer, Insomnia for instance, and connect to the local host created from the Social-API application. From there you can do a series of commands, such as getting, creating, updating, or deleting users, thoughts, and reactions. The routes for users all start with api/users and are as follows:

  router.route('/')
  .get(getUsers)
  .post(createUser);

router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);


--- The routes for thoughts all begin with api/thoughts and are as follows:


router.route('/')
  .get(getThoughts)
  .post(createThought);

router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions')
    .post(createReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);


  ![get users](https://github.com/user-attachments/assets/888a82b3-4d8e-4e99-9d15-3fcb97b9ae78)



  ![get thoughts](https://github.com/user-attachments/assets/7cba6b7f-3ddf-4e90-8071-5f1c198e1e6f)

  

  ## Credits
  This application was made using

  express ( https://www.npmjs.com/package/express )

  and mongoose ( https://www.npmjs.com/package/mongoose )

  ## License
  MIT

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  [View license here] => (https://opensource.org/license/MIT)

  


  Questions? Please contact me at:
  https://github.com/ChristopherP-C or christopherp.c.2day@gmail.com

