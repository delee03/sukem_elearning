import CourseCard from '@/app/components/card/course-card';

interface Props {
  data: Course[];
}
const CoursesPage: React.FC<Props> = ({ data }) => {
  return (
    <section className="container mx-auto p-16">
      <h3 className="text-black font-extrabold text-5xl text-center py-5 leading-snug">
        Pick the most popular <br /> courses
      </h3>
      <p className="text-slate-500 text-center pb-12 text-2xl tracking-wide">
        You learn to day and earn tommorrow. The roots of education and bitter{' '}
        <br /> but the fruits are sweet.
      </p>
      <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3 py-8">
        {
          data.map((item) => (
            <CourseCard key={item.id} course={item}/>
          ))
        }
      </div>
    </section>
  );
};

export default CoursesPage;
