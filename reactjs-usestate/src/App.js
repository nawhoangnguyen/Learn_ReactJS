import { useState } from "react";

function App() {
  
  
  // Moi chi la chuoi json
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storeJobs = JSON.parse(localStorage.getItem("jobs"));
    return storeJobs ?? [];
  });


  const handleAdd = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };

  const handleClear = () => {
    // Clear the component state
    setJobs([]);

    // Clear the local storage
    localStorage.removeItem("jobs");
  };

  const handleDelete = (index) => {
    setJobs((prev) => {
      // Create a copy of the previous state array
      const newJobs = [...prev];
      
      // Remove the job at the specified index
      newJobs.splice(index, 1);
  
      // Update local storage with the new job data
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
  
      // Return the updated state
      return newJobs;
    });
  }

  return (
    <div style={{ padding: 30 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleClear}>Clear</button>
      <table style={{ border: "2px solid black" }}>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{job}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default App;
