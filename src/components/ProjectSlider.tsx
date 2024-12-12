import Image from "next/image"

const projects = [
  {
    image: "/next.svg",
    title: "some title1"
  },
  {
    image: "/next.svg",
    title: "some title2"
  },
  {
    image: "/next.svg",
    title: "some title3"
  },
  {
    image: "/next.svg",
    title: "some title4"
  },
  {
    image: "/next.svg",
    title: "some title5"
  },
  {
    image: "/next.svg",
    title: "some title6"
  },
  {
    image: "/next.svg",
    title: "some title7"
  }
]

function ProjectSlider() {

  return (
    <section>
      <h2 className="text-amberDarker text-3xl">Projects</h2>
      <article className="w-full flex justify-start ml-4 gap-2 flex-wrap p-4">
        {...projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col">
            <p>{project.title}</p>
            <div
              className="border-amberDarker border-solid border shadow-lg p-4 flex-shrink-0"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={100}
                height={100}
              />
            </div>
          </div>

        ))

        }
      </article>
    </section>
  )
}

export default ProjectSlider