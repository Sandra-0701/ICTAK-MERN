import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SubmissionView = () => {
  const { submissionLink } = useParams();
  const [submission, setSubmission] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:9000/api/submissions/${submissionLink}`).then((res) => {
      setSubmission(res.data);
    }).catch((error) => {
      console.error('Error fetching submission:', error);
    });
  }, [submissionLink]);

  return (
    <div>
      <h1>Submission View</h1>
      {submission && (
        <div>
          <p>Name: {submission.Name}</p>
          <p>Batch: {submission.Batch}</p>
          <p>Project Topic: {submission.ProjectTopic}</p>
          <p>Submission Link: <a href={submissionLink} target="_blank" rel="noopener noreferrer">{submissionLink}</a></p>
        </div>
      )}
    </div>
  );
}

export default SubmissionView;
