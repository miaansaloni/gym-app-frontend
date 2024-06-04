import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CoursesComponent = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/courses")
      .then((res) => setCourses(res.data.courses))
      .catch((err) => navigate("/"));
  });

  return (
    <div>
      <h1>Courses</h1>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Activity</th>
            <th scope="col">Location</th>
            <th scope="col">Day</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr>
              <td>{course.activity.name}</td>
              <td>{course.location}</td>
              <td>{course.slot.day}</td>
              <td>
                {course.slot.start_hour} {course.slot.end_hour}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesComponent;
