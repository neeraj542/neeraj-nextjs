import MotionDiv from "@/components/motion-div";
import ProjectCard from "@/components/projects/project-card";
import { projectsContent } from "@/components/projects/project-content";
import { Separator } from "@/components/ui/separator";

const Projects = () => {
  return (
    <MotionDiv delayOffset={0.2}>
      <div
        className="my-8 md:my-12 w-full md:max-w-screen-2xl md:mx-auto md:px-16 scroll-mt-24"
        id="projects"
      >
        <div className="flex justify-center items-center text-3xl font-semibold">
          Projects
        </div>
        <ul className="flex flex-col items-center justify-center w-full">
          {projectsContent.map((card, idx) => {
            return (
              <div key={idx}>
                <ProjectCard
                  image={card.image}
                  title={card.title}
                  header={card.header}
                  description={card.description}
                  tags={card.tags}
                  link={card.link}
                />

                <Separator className="my-4" />
              </div>
            );
          })}
        </ul>

        <div className="flex justify-end p-4"> 
  <a href="https://devpost.com/mneeraj2133" target="_blank">
    <button className="bg-green-400 text-black text-xl font-semibold py-2 px-4 rounded hover:bg-gray-500 transition-colors duration-300" >
      All Projects
    </button>
  </a>
</div>

      </div>
    </MotionDiv>
  );
};

export default Projects;
