import { useState } from "react";
import { useEffect } from "react";
import Job from "../Job/Job";
 

const FeaturedJob = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <>
            <div className='text-center'>
                <h1 className='text-5xl'>Featured Jobs {jobs.length}</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
     
            <div>
                {
                     jobs.map(job=> <Job key={job.id} job={job}></Job>)
                }
            </div>
        </>
    );
};

export default FeaturedJob;