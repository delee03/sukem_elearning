import Image from 'next/image';
import Link from 'next/link';

interface Props {
  course: Course;
}

const CourseCard: React.FC<Props> = ({ course }) => {
  const {
    image,
    category,
    author,
    avatar,
    name,
    price,
    sale,
    time,
    classes,
  } = course;
  return (
    <div className="group bg-white rounded-2xl overflow-hidden text-black duration-300 hover:-translate-y-4 hover:scale-105">
      <a
        href="#"
        className="relative block h-96 overflow-hidden rounded-lg p-6"
      >
        <Image
          src={image}
          width={1000}
          height={1000}
          layout="responsive"
          loading="lazy"
          alt={name}
          className="w-full object-cover transition duration-200 rounded-lg"
        />
      </a>

      <div className="flex flex-col gap-1 rounded-b-lg bg-white p-5">
        <div className="flex flex-col">
          <p className="uppercase font-light text-[#434EC4] pb-3 ">
            {category}
          </p>
          <a
            href="#"
            className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-2xl"
          >
            {name}
          </a>
          <span className="text-xl text-gray-500 py-4">
            <Image
              src={avatar}
              alt="h"
              width={100}
              height={100}
              className="mb-1 mr-1 w-6 h-6 rounded-full inline-block"
            />{' '}
            by {author}
          </span>
        </div>
        <div className="flex justify-evenly text-xl text-gray-500">
          <span>{time}</span>
          <span>{classes} classes</span>
          <span>{sale} sales</span>
        </div>
        <div className="flex justify-between items-center pt-4">
          <span className="font-bold text-black lg:text-2xl">${price}</span>
          <Link
            href={`#`}
            className="px-10 py-5 border-[1px] border-black font-semibold rounded-lg text-[22px] duration-200 hover:border-[#ffee00] hover:bg-[#ffee00]"
          >
            Enroll
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
