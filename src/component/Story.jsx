import Title from "./Title";

export default function Story() {
  return (
    <div className="Story">
      <Title
        className="black-tit"
        secTit="Italian Restaurant"
        firstTit="OUR STORY"
      />
      <p className="storyp text-center">
        Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis
        pretium. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Nulla et leo accumsan, egestas velit ac,
        fringilla tortor. Sed varius justo sed luctus mattis.
      </p>
    </div>
  );
}
