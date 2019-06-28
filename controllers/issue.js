/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const issueApi = require('../models/issue.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const issueRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
//request handler to get new form
issueRouter.get('/new', (req, res) => {
      res.render('issues/newIssueForm.hbs')
    
})

//request handler to render all issues
issueRouter.get('/', (req,res) =>{
  issueApi.getAllIssues()
  .then((issues) => {
    res.render('issues/issues.hbs', {issues})
  })
  .catch(res.send)
})

//request handler to post
issueRouter.post('/', (req, res) => {
  issueApi.addNewIssue(req.body)
    .then(() => {
      res.redirect('/issues')
    })
    .catch((err) => {
      res.send(err)
    })
})

   
//request handler to render single issue
issueRouter.get('/:issueId', (req,res) =>{
  issueApi.getIssue(req.params.issueId)
  .then((issue) => {
  res.render('issues/issue.hbs', {issue})
  })
  .catch(res.send)
})

//request handler to edit issue form
issueRouter.get('/:issueId/edit', (req, res) => {

  issueApi.getIssue(req.params.issueId)
    .then((issue) => {
      res.render('issues/editIssueForm.hbs', {issue})
    })
    .catch(res.send)
})

//request handler to update issue form
issueRouter.put('/:issueId', (req,res) => {
  issueApi.updateIssue(req.params.issueId, req.body)
  //return promise
  .then(() => {
    res.redirect('/issues')
  })
})

//request handler to delete, redirects to /issues once issue has been deleted
issueRouter.delete('/:issueId', (req, res) => {
  issueApi.deleteIssue(req.params.issueId)
  .then(()=> {
    res.redirect('/issues')
  })
  .catch(res.send)
})
   
  
/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  issueRouter
}
