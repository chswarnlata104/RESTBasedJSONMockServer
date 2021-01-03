# RESTBasedJSONMockServer
Implemented the task using Node.js. The list of functionalities I have implemented are –
1. Get request
2. Get request based on given id
3. Post request
4. Delete request
5. Patch request
6. Put request
7. Throwing error whenever id is tried to be mutated.
8. Filtering
9. Searching

For dev testing, followed the following steps -
Initially kept the store.json empty. Using the post request, added data into store.json.
POST /posts
POST /books
POST /authors

After adding data into store.json. Checked if the post request added the data correctly or not by using the handler of get request.
GET /posts
GET /books
GET /authors

Also checked if we can get the details of the entities by using ‘Id’.
GET /posts/0
GET /books/0
GET /authors/0

Checked the delete request by using the id field of the entity.

DELETE /posts/0
DELETE /books/0 

Also tried to delete an entity data by using an id that doesn’t exist.

Handled patch and put request. 
PUT /posts/0
PUT /authors/0 
PATCH /posts/0
PATCH /authors/0

Generated error if id is tried to be mutated in both put and patch requests.

Added code for handling filtering and searching requests.
GET /posts?title=book&author=CommerceIQ
GET /posts?title=book
