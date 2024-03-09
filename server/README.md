# APIs

- Signup 

```
{
    "success": true,
    "message": "Successfully created a new user",
    "data": {
        "name": "santosh kumar",
        "email": "santosh@gamil.com",
        "password": "$2b$10$V8oeJuFdlW7Dx2h.r/jWLeyFbyATYa5o6c8JyiOcMdsB4BRDTKqIm",
        "_id": "65ec6a93df38fa28b7760ce8",
        "createdAt": "2024-03-09T13:56:35.070Z",
        "updatedAt": "2024-03-09T13:56:35.070Z",
        "__v": 0
    },
    "err": {}
}
```

- Signin

```
{
    "success": true,
    "message": "User successfully logged in",
    "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWM2YTkzZGYzOGZhMjhiNzc2MGNlOCIsImVtYWlsIjoic2FudG9zaEBnYW1pbC5jb20iLCJpYXQiOjE3MDk5OTMwNjUsImV4cCI6MTcwOTk5NjY2NX0.0dVxU2CgZQXY2pMKLRcvIL-dG2QASOZV57gEevZsoIw",
    "err": {}
}
```

## Quize

- Create 

```
{
    "success": true,
    "data": {
        "title": "What is the capital of France?",
        "authorId": "65ec6a93df38fa28b7760ce8",
        "questions": [
            "65ecb4ba7981ebdf19429368"
        ],
        "_id": "65ecb55e4ef20ff42726450a",
        "createdAt": "2024-03-09T19:15:42.851Z",
        "updatedAt": "2024-03-09T19:15:42.851Z",
        "__v": 0
    },
    "message": "Successfully created a quiz",
    "err": {}
}
```

- Fetch Quizes

```
{
    "message": "Successfully fetched all quizzes",
    "data": [
        {
            "_id": "65eca8081aff6f5b97b1b04f",
            "title": "Sample Quiz",
            "questions": [],
            "createdAt": "2024-03-09T18:18:48.475Z",
            "updatedAt": "2024-03-09T18:18:48.475Z",
            "__v": 0
        },
        {
            "_id": "65ecabac1aff6f5b97b1b051",
            "title": "Test Your Knowledge",
            "questions": [],
            "createdAt": "2024-03-09T18:34:20.479Z",
            "updatedAt": "2024-03-09T18:34:20.479Z",
            "__v": 0
        },
        {
            "_id": "65ecade7fa11891ef0f5e65b",
            "title": "What is the capital of France?",
            "questions": [],
            "createdAt": "2024-03-09T18:43:51.411Z",
            "updatedAt": "2024-03-09T18:43:51.411Z",
            "__v": 0
        },
        {
            "_id": "65ecaeba69009cb22f6131ed",
            "title": "What is the capital of France?",
            "questions": [],
            "createdAt": "2024-03-09T18:47:22.268Z",
            "updatedAt": "2024-03-09T18:47:22.268Z",
            "__v": 0
        },
        {
            "_id": "65ecaf3de12b5fd5db6f53f7",
            "title": "What is the capital of France?",
            "questions": [],
            "createdAt": "2024-03-09T18:49:33.584Z",
            "updatedAt": "2024-03-09T18:49:33.584Z",
            "__v": 0
        },
        {
            "_id": "65ecaf6867b1b6b0ad17fb61",
            "title": "What is the capital of France?",
            "questions": [],
            "createdAt": "2024-03-09T18:50:16.832Z",
            "updatedAt": "2024-03-09T18:50:16.832Z",
            "__v": 0
        },
        {
            "_id": "65ecb0120c79d7b1b5191b9b",
            "title": "What is the capital of France?",
            "questions": [],
            "createdAt": "2024-03-09T18:53:06.332Z",
            "updatedAt": "2024-03-09T18:53:06.332Z",
            "__v": 0
        },
        {
            "_id": "65ecb55e4ef20ff42726450a",
            "title": "What is the capital of France?",
            "authorId": {
                "_id": "65ec6a93df38fa28b7760ce8",
                "name": "santosh kumar",
                "email": "santosh@gamil.com",
                "password": "$2b$10$V8oeJuFdlW7Dx2h.r/jWLeyFbyATYa5o6c8JyiOcMdsB4BRDTKqIm",
                "createdAt": "2024-03-09T13:56:35.070Z",
                "updatedAt": "2024-03-09T13:56:35.070Z",
                "__v": 0
            },
            "questions": [
                {
                    "_id": "65ecb4ba7981ebdf19429368",
                    "quizId": "65ecabac1aff6f5b97b1b051",
                    "authorId": "65ec6a93df38fa28b7760ce8",
                    "title": "What is the capital of France?",
                    "answers": [
                        "[Paris],"
                    ],
                    "options": [
                        "[Paris, London, Berlin, Rome]"
                    ],
                    "createdAt": "2024-03-09T19:12:58.726Z",
                    "updatedAt": "2024-03-09T19:12:58.726Z",
                    "__v": 0
                }
            ],
            "createdAt": "2024-03-09T19:15:42.851Z",
            "updatedAt": "2024-03-09T19:15:42.851Z",
            "__v": 0
        }
    ],
    "success": true,
    "err": {}
}
```
- Fetched by id

```
{
    "message": "Successfully fetched the quiz by id",
    "data": {
        "_id": "65ecb55e4ef20ff42726450a",
        "title": "What is the capital of France?",
        "authorId": "65ec6a93df38fa28b7760ce8",
        "questions": [
            "65ecb4ba7981ebdf19429368"
        ],
        "createdAt": "2024-03-09T19:15:42.851Z",
        "updatedAt": "2024-03-09T19:15:42.851Z",
        "__v": 0
    },
    "success": true,
    "err": {}
}
```

- Delete 

```
{
    "message": "Successfully delete the quiz",
    "data": {
        "_id": "65eca8081aff6f5b97b1b04f",
        "title": "Sample Quiz",
        "questions": [],
        "createdAt": "2024-03-09T18:18:48.475Z",
        "updatedAt": "2024-03-09T18:18:48.475Z",
        "__v": 0
    },
    "success": true,
    "err": {}
}
```

- update

```
{
    "message": "Successfully updated the quiz",
    "data": {
        "_id": "65ecabac1aff6f5b97b1b051",
        "title": "Simple Quiz",
        "questions": [
            "65ecb4ba7981ebdf19429368"
        ],
        "createdAt": "2024-03-09T18:34:20.479Z",
        "updatedAt": "2024-03-09T19:21:49.947Z",
        "__v": 0,
        "authorId": "65ec6a93df38fa28b7760ce8"
    },
    "success": true,
    "err": {}
}
```

- Attempt Response

```
{
    "message": "Successfully fetched all attempt",
    "data": [
        {
            "_id": "65ecbff8363a16b47cc7e1f1",
            "quizId": "65ecaf6867b1b6b0ad17fb61",
            "playerId": "65ec6a93df38fa28b7760ce8",
            "questions": [
                {
                    "_id": "65ecc17c9e5a5a09a8e0ff68",
                    "questionId": "65ecad55fa11891ef0f5e659",
                    "answers": [
                        "Option A"
                    ],
                    "isCorrect": true
                },
                {
                    "_id": "65ecc17c9e5a5a09a8e0ff69",
                    "questionId": "65ecb4ba7981ebdf19429368",
                    "answers": [
                        "Option B",
                        "Option C"
                    ],
                    "isCorrect": false
                }
            ]
        },
        {
            "_id": "65ecc169363a16b47cc7e1ff",
            "quizId": "65ecb55e4ef20ff42726450a",
            "playerId": "65ec6a93df38fa28b7760ce8",
            "questions": [
                {
                    "_id": "65ecc17c9e5a5a09a8e0ff6a",
                    "questionId": "65ecb4ba7981ebdf19429368",
                    "answers": [
                        "Option A"
                    ],
                    "isCorrect": true
                },
                {
                    "_id": "65ecc17c9e5a5a09a8e0ff6b",
                    "questionId": "65ecad55fa11891ef0f5e659",
                    "answers": [
                        "Option B",
                        "Option C"
                    ],
                    "isCorrect": false
                }
            ]
        },
        {
            "_id": "65ecc171363a16b47cc7e201",
            "quizId": "65ecb55e4ef20ff42726450a",
            "playerId": "65ec6a93df38fa28b7760ce8",
            "questions": [
                {
                    "_id": "65ecc17c9e5a5a09a8e0ff6c",
                    "questionId": "65ecb4ba7981ebdf19429368",
                    "answers": [
                        "Option A"
                    ],
                    "isCorrect": true
                },
                {
                    "_id": "65ecc17c9e5a5a09a8e0ff6d",
                    "questionId": "65ecad55fa11891ef0f5e659",
                    "answers": [
                        "Option B",
                        "Option C"
                    ],
                    "isCorrect": false
                }
            ]
        }
    ],
    "success": true,
    "err": {}
}
```