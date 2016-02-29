#Contribution Guidelines

- If your validation function falls in a common category then place it in `validators/common` otherwise create a new file with its category name.
- Function name should represent expected input, use noun or verb e.g. 'validUser', 'properHTML' etc.
- Function must return null on no error otherwise an object with the same key name as that of function name and its boolean value "false" must be returned.
