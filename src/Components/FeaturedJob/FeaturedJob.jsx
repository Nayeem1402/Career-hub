import { useState } from "react";
import { useEffect } from "react";
import Job from "../Job/Job";


const FeaturedJob = () => {

    const [jobs, setJobs] = useState([]);
    // this is not the best way to load show all data
    const [dataLength, setDataLength] = useState(4)

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

            <div className="grid grid-cols-2 my-5 gap-5 mx-24">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
           <div className="flex justify-center my-3">
           <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={() => setDataLength(jobs.length)} className='linier '>See All Jobs</button>
            </div>
           </div>
        </>
    );
};

export default FeaturedJob;