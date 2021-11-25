import React, {useContext} from "react"
import IssueForm from "../components/IssueForm.js"
import Issue from "../components/Issue.js"
import IssueList from "../components/IssueList.js"
import {UserContext} from "../context/UserProvider"


export default function Profile(){
    const {
        user: {username},
        addIssue,
        issues
    } = useContext(UserContext)
    return(
        <div className="profile">
            <h1>Welcome @{username}!</h1>
            <h3>Post an Issue</h3>
            <IssueForm addIssue = {addIssue}/>
            <h3>Your Issues</h3>
            <IssueList issues={issues}/>
        </div>
    )
}
