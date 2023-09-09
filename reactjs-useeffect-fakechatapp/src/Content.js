import { useEffect, useState } from "react";
const lessons = [
  {
    id: 1,
    name: "ReacJS là gì ? Tại vì sao nên học RJS",
  },
  {
    id: 2,
    name: "SPA/MPA là gì?",
  },
  {
    id: 3,
    name: "Arrow function",
  },
];
function Content() {
  const [lessonId, setLessionId] = useState(1);

  useEffect(() => {
    const handleComment = ({detail}) => {
        console.log({detail});
    };

    window.addEventListener(`lesson-${lessonId}`, handleComment);
    return ( () => {
        window.removeEventListener(`lesson-${lessonId}`, handleComment);

    })
  }, [lessonId]);

  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            style={{
              color: lessonId === lesson.id ? "red" : "#333",
              width: "20%",
            }}
            onClick={() => setLessionId(lesson.id)}
            key={lesson.id}
          >
            
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Content;
