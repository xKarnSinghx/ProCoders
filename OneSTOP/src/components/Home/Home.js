import React from 'react';

function Home() {
  return (
    <div id="home">
      <div
        className="head bg-info"
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/images/home-bg.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
        }}
      >
        <div className="home-content text-white">
          <div className="home-shadow-box px-3 py-4">
            <h1 style={{ fontSize: 'xxx-large' }}> OneSTOP </h1>
            <div className="home-text d-inline-block" style={{ maxWidth: '800px', fontSize: '1.2rem' }}>
              Here you can get latest update of all upcoming contest from diffrent Coding Platforms like CodeChef,
              Codeforces, Hackerearth, Hackerrank, Leetcode and Atcoder. To hone your coding skills.
              So be updated and keep winning.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
