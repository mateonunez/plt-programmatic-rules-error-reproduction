/// <reference path="./global.d.ts" />
"use strict";

const { join } = require("path");
require("dotenv").config({ path: join(__dirname, ".env") });

const auth = require("@platformatic/db-authorization");

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
  app.register(auth, {
    jwt: {
      namespace: process.env.PLT_AUTHORIZATION_JWT_NAMESPACE,
      jwks: {
        allowedDomains: [
          process.env.PLT_AUTHORIZATION_JWT_JWKS_ALLOWED_DOMAINS,
        ],
      },
    },
    rules: [
      {
        role: "anonymous",
        entity: "post",
        find: false,
        save: false,
        delete: false,
      },
      {
        role: "author",
        entity: "post",
        async find({ user, ctx, where }) {
          console.log("hiiiiiiiiii!");
          // return {
          //   ...where,
          //   authorUserId: {
          //     eq: user["X-PLATFORMATIC-USER-ID"],
          //   },
          // };
          return false;
        },
        async delete({ user, ctx, where }) {
          return {
            ...where,
            authorUserId: {
              eq: user["X-PLATFORMATIC-USER-ID"],
            },
          };
        },
        // defaults: {
        //   authorUserId: "X-PLATFORMATIC-USER-ID",
        //   authorName: "X-PLATFORMATIC-USER-NAME",
        // },
        async save({ user, ctx, where }) {
          console.log("papayaaaaaaaaaaaaaaa!");
          return {
            ...where,
            authorUserId: {
              eq: user["X-PLATFORMATIC-USER-ID"],
            },
          };
        },
      },
    ],
  });
};

module.exports[Symbol.for('skip-override')] = true;
