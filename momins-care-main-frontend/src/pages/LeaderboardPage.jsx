import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
const LeaderboardPage = () => {
  // Dummy JSON data
  const leaderboardData = [
    {
      id: 1,
      name: "John Doe",
      score: 95,
      profilePic:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      score: 85,
      profilePic:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
    // Add more data sets here
    // BEGIN: RANDOM_DATA
    {
      id: 3,
      name: "Alice Johnson",
      score: 80,
      profilePic:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
    {
      id: 4,
      name: "Bob Williams",
      score: 75,
      profilePic:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
    {
      id: 5,
      name: "Emily Davis",
      score: 90,
      profilePic:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
    {
      id: 6,
      name: "Michael Brown",
      score: 88,
      profilePic:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
    {
      id: 7,
      name: "Olivia Wilson",
      score: 92,
      profilePic:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
    {
      id: 8,
      name: "James Taylor",
      score: 82,
      profilePic:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="flex flex-col container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
        <table className="w-full border-collapse p-10 m-10">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200">Rank</th>
              <th className="py-2 px-4 bg-gray-200">Name</th>
              <th className="py-2 px-4 bg-gray-200">ID</th>
              <th className="py-2 px-4 bg-gray-200">Score</th>
              <th className="py-2 px-4 bg-gray-200">Profile Pic</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData
              .sort((a, b) => b.score - a.score)
              .map((student, index) => (
                <tr
                  key={student.id}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{student.name}</td>
                  <td className="py-2 px-4">{student.id}</td>
                  <td className="py-2 px-4">{student.score}</td>
                  <td className="py-2 px-4">
                    <img
                      src={student.profilePic}
                      alt={student.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeaderboardPage;
