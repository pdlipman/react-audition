Since the data is grouped by class name, I went through the student data, found the average grade per class, and added the student name and average grade to the class objects.

The reselect library was used for sorting since it won't cause a new render when there's a new sort value selected. This can be found in `classSubjectSelectors.js`.

The reducers are only responsible for updating the Redux state. The logic to hit the endpoints and process the data was moved into the thunks.

The Material UI library was used for the layouts.