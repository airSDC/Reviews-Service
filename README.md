# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
## CRUD API


GET: Use the '/rooms/:roomId/reviews' endpoint to access get all the reviews for one room, where :roomId is the ID of the room you are interested in
POST: Use the '/rooms/:roomId/reviews' endpoint to add a review to a room, where :roomId is the ID of the room you are interested in
In the request body, use this format for your new review:
```sh
    {
    "room_id": 5,
    "user": "Jeremy",
    "created_at": "August 2018",
    "review_text": "Sed et consequuntur itaque natus amet minus.",
    "image_url": "https://s3-us-west-1.amazonaws.com/airfecuserimages/randPeopleImages/randPerson2.jpeg",
    "accuracy_rating": 3,
    "communication_rating": 5,
    "cleanliness_rating": 3,
    "location_rating": 2,
    "check_in_rating": 4,
    "value_rating": 4,
    "is_reported": true,
    "__v": 0
  }
```
PUT: Use the '/rooms/:roomId/reviews/:reviewToUpdate' endpoint to update a review for a room, where :roomId is the ID of the room you are interested in and :reviewToUpdate is the ID of the review you would like to Update
DELETE: Use the 'rooms/:roomId/reviews/:reviewToDelete' endpoint to delete a review for a room, where :roomId is the ID of the room you are interested in and :reviewToDelete is the ID of the review you would like to delete

