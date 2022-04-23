# Code Review Guide

0. Introduce yourselves!
1. Walk through all of the features currently present in the application - start with the ones you're most familiar with
2. Walk through an authenticated route, from the HTML user interaction through to the SQL statement. Make sure `.isAuthorized()` is present, and if only specific users are intended to have access, `req.user.id` should be used to validate Authorization.
3. Consistency throughout code
    - Formatting
    - Style
    - Naming
4. DRY code
5. Opportunities to simplify code
6. Conversation about Trello Board and remaining tasks
