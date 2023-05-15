## How to reproduce

- `npm install`
- `cp .env.sample .env`
- `npx platformatic db migrations apply`
- `npm start`
- `curl -X 'GET' 'http://localhost:3042/posts' -H 'accept: application/json'`

## Output of the error:

```
[12:12:38.911] ERROR (89964): request.setupDBAuthorizationUser is not a function
reqId: "req-1"
req: {
"method": "GET",
	"url": "/posts",
	"hostname": "localhost:3042",
	"remoteAddress": "127.0.0.1",
	"remotePort": 53344
}
res: {
	"statusCode": 500
}
err: {
	"type": "TypeError",
	"message": "request.setupDBAuthorizationUser is not a function",
	"stack":
		TypeError: request.setupDBAuthorizationUser is not a function
			at findRuleForRequestUser (/home/mn/source/mn/projects/platformatic-rules-auth/node_modules/@platformatic/db-authorization/index.js:352:17)
							at find (/home/mn/source/mn/projects/platformatic-rules-auth/node_modules/@platformatic/db-authorization/index.js:168:30)
								at Object.<anonymous> (/home/mn/source/mn/projects/platformatic-rules-auth/node_modules/@platformatic/sql-openapi/lib/shared.js:135:30)
									at preHandlerCallback (/home/mn/source/mn/projects/platformatic-rules-auth/node_modules/fastify/lib/handleRequest.js:128:37)
										at preValidationCallback (/home/mn/source/mn/projects/platformatic-rules-auth/node_modules/fastify/lib/handleRequest.js:112:5)
														at next (/home/mn/source/mn/projects/platformatic-rules-auth/node_modules/fastify/lib/hooks.js:179:7)
															at handleResolve (/home/mn/source/mn/projects/platformatic-rules-auth/node_modules/fastify/lib/hooks.js:196:5)
																at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
}

```

## Fix here

https://github.com/mateonunez/plt-programmatic-rules-error-reproduction/pull/1

