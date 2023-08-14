import { data } from "../speakerdata";
import SpeakerCard from "../src/speaker/speaker";

export default function Index() {
  const profile = data[0];
  return (
    <div className="container speaker-list">
      <S peakerCard profile={profile} />
    </div>
  );
}
