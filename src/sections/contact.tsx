import ContactList from "@/components/contact-list";
import MotionDiv from "@/components/motion-div";

export default function contact() {
  return (
    <section
      className="my-4 mb-28 flex flex-col items-center gap-5 text-center md:mt-8"
      id="contact"
    >
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-2 w-full text-center text-3xl font-semibold md:mb-4">
            Contact Me
          </h2>
        </MotionDiv>
      <MotionDiv>
        <p>
          If you are interested in working together, please don't hesitate to
          get in touch with me.
        </p>
      </MotionDiv>
      <ContactList />
    </section>
  );
}
