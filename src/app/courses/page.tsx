import { courses } from "../mocks/course.mock";
import CoursesPage from "../pages/courses-page";

export default function Course() {
  return (
    <CoursesPage data={courses}/>
  )
}
