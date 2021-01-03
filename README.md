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
1. POST /posts
2. POST /books
3. POST /authors

After adding data into store.json. Checked if the post request added the data correctly or not by using the handler of get request.
1. GET /posts
2. GET /books
3. GET /authors

Also checked if we can get the details of the entities by using ‘Id’.
1. GET /posts/0
2. GET /books/0
3. GET /authors/0

Checked the delete request by using the id field of the entity.

1. DELETE /posts/0
2. DELETE /books/0 

Also tried to delete an entity data by using an id that doesn’t exist.

Handled patch and put request. 
1. PUT /posts/0
2. PUT /authors/0 
3. PATCH /posts/0
4. PATCH /authors/0

Generated error if id is tried to be mutated in both put and patch requests.

Added code for handling filtering and searching requests.
1. GET /posts?title=book&author=CommerceIQ
2. GET /posts?title=book
