# Models

The models module consists of validation objects which provide a security layer on top of the database object schemas provided by the "mongoose" library.

This module uses "joi" for validating the properties provided by users submit data to the internal people count database.

Usage:

- Validation objects can be imported specifcially by destructing like so:
  const { USER } = require('./models')

OR importing all validation modules

const validationModels = require('./models');
THEN accessing a specific module like so:

validationModels.USER
