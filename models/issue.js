/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */


/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const IssueSchema = new mongoose.Schema({
 description: String,
 createdAt: Date,
 status: String,
 priority:String
})


/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 compiling model below***/
const IssueCollection = mongoose.model('Issue', IssueSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllIssues() {
    return IssueCollection.find()
  }
  
  function addNewIssue(newIssue) {
    return IssueCollection.create(newIssue)
  }
  
  function getIssue(issueId) {
    return IssueCollection.findById(issueId)
  }
  
  function updateIssue(issueId, updateIssue) {
    return IssueCollection.findByIdAndUpdate(issueId, updateIssue)
  }
  
  function deleteIssue(issueId) {
    return IssueCollection.findByIdAndDelete(issueId)
  }
  

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllIssues,
  addNewIssue,
  getIssue,
  updateIssue,
  deleteIssue
}

