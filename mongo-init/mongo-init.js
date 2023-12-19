// ./mongo-init/mongo-init.js
db.createUser({
    user: 'admin',
    pwd: 'pass',
    roles: [
      {
        role: 'dbOwner',
        db: '4basecare-db',
      },
    ],
  })