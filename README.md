# Project-Gigih

# i. Database Structure

Collection:
a. Thumbnail {
    atribute : id, url_image
}
b. Product {
    atribute : url_product, title, price, id_thumbnail
}
c. Comment {
    atribute : username, comment, timestamp, id_thumbnail
}

Relation: 
Product <- (M-1) -> Thumbnail <- (1-M) -> Comment

- Product have relation Many to One in Thumbnail using Thumbnail ID 
- Comment have relation Many to One in Thumbnail using Thumbnail ID

# ii. API Structure

1. Thumbnail List
Step :
a. Request API, using url http://localhost:3000/api/thumbnail,
b. Use ThumbnailsControllers.getAllThumbnails from routes
c. Use getAllThumbnails from thumbnailControllers.
d. getAllThumbnailUsecase from thumbnailUsecases.
e. Find Thumbnail from Thumbnail models
f. Response { status(200), json(thumbnails)}

2. Product / Comment List
Step :
a. Request API, using url http://localhost:3000/api/product/:id_thumbnail, params = id_thumbnail
b. Use productControllers.getAllProductByIDThumbnail from routes
c. Use getAllProductByIDThumbnails from productControllers.
d. getProductByIDUsecase from productUsecases.
e. Find id_thumbnail from product and check exec() from Product models
f. Response { status(200), json(Product)}

3. Comment Post

a. Method Post, requst body, using url http://localhost:3000/api/comment
b. routes
c. commentControllers.
d. commentUsecases.
e. comment (models)
f. Response { status(200), message: "success"}

# iii. List API request and response

#Thumbnails
* Thumbnail object
```
{
  id: integer
  url_image: string
}
```
**GET /thumbnails**
----
  Returns all users in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Thumbnails not found" }`
```
{
  Thumbnails: [
           {<thumbnail_object>},
           {<thumbnail_object>},
         ]
}
```

#Products
* Product object
```
{
  id: integer
  url_product: string
  title: string
  price: number
  id_thumbnail: string
}
```

**GET /product/:id_thumbnail**
----
  Returns products with specified Thumbnail ID.
* **URL Params**  
  *Required:* `id_thumbnail=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  `[{ <products_object> }]` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Product With id ${id_thumbnail} not found" }`


#Comments
* Comment object
```
{
  id: integer
  username: string
  comment: string
  timestamp: date
  id_thumbnail: string
}
```

**GET /comment/:id_thumbnail**
----
  Returns comment with specified Thumbnail ID.
* **URL Params**  
  *Required:* `id_thumbnail=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  `[{ <comment_object> }]` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Comments With id ${id_thumbnail} not found" }`
   OR  
  * **Code:** 500  
  **Content:** `{ error : Thumbnail not found }`

**POST /comments**
----
  Creates a new comments and returns the new object.
* **URL Params**  
  None
* **Data Params**  
```
  {
    username: string
    comment: string
    id_thumbnail: integer
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 201  
  **Content:**  `{ message: "Success" }`
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{ error : "Fail" }`
  OR  
  * **Code:** 404  
  **Content:** `{ error : Thumbnail not found }`


# iv. How to run

1. Clone repositories in your local
2. cd ./Back-End
3. create database in mongodb:
    name: tokopedia, or you can adjust in .env
    collections: thumbnails, comments, products
4. create dummy data in database. (ex. ./database)
5. Set your database URL and application port in .env
6. Run using "nodemon app.js"
7. Create Request using postman (example: http://localhost:3000/api/thumbnails), also look in routes

