import React from "react";
import "../../assets/css/Jobs.css";

// reactstrap components
import {
  Container
} from "reactstrap";

class Open extends React.Component{
  render(){
    return (
      <>
      <div className="header bg-gradient-info pb-4 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              <h1>Find All The Open Job Applications Here</h1>
            </div>
          </Container>
      </div>
      <div className="Job-container">
          <div className="heading"><h1>Job Openings (Off Campus Placement)</h1></div>
          <div className="Links">
            <a href="https://careers.microsoft.com/us/en/job/951540/India-GSMO-Tech-Intern">Apply At Microsoft</a>
            <a href="https://www.infosys.com/careers/apply.html">Apply At Infosys</a>
            <a href="https://careers.ibm.com/ShowJob/Id/1025187/Intern">Apply At IBM</a>
            <a href="https://www.linkedin.com/jobs/view/2369156420/">Apply At LinkedIn</a>
            <a href="https://salesforce.wd1.myworkdayjobs.com/en-US/External_Career_Site/job/India---Hyderabad/Intern---Associate-Systems-Specialist_JR77359?source=LinkedIn_Jobs">Apply At SalesForce</a>
            <a href="https://www.amazon.jobs/en/jobs/1285397/sde-intern?mode=job&iis=Job+Posting&iisn=Indeed+(Free+Posting)&utm_source=indeed.com&utm_campaign=all_amazon&utm_medium=job_aggregator&utm_content=organic&dclid=CjkKEQiA_9r_BRCGqpOF3crG3uABEiQAVwsSIJfAu3WgpV4fAszMBw">Apply At Amazon</a>
            <a href="https://www.glassdoor.co.in/job-listing/sdet-intern-hacker-earth-JV_IC2940587_KO0,11_KE12,24.htm?jl=1006813242413&pos=101&ao=1136043&s=58&guid=0000017692cfd5e391e10179cd673c36&src=GD_JOB_AD&t=SR&vt=w&uido=B12525C98B0ABE90B2338D9EF09B5CC4&ea=1&cs=1_abd1adc">Apply At Hacker Earth</a>
            <a href="https://jobs.cisco.com/">Apply At Cisco</a>
            <a href="https://jobs.gecareers.com/power/global/en/job/GE11GLOBALR3541311EXTERNALENGLOBAL/Intern-Software?utm_source=linkedin&codes=linkedin&utm_medium=phenom-feeds">Apply Through LinkedIn</a>
            <a href="https://www.merkleinc.com/careers/all-openings/743999716664410">Apply At Merkleinc</a>
          </div>
          
      </div>
    </>
    );
  }
}

export default Open;
