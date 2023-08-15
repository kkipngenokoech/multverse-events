import { data } from "../speakerdata";
import SpeakerCard from "../src/speaker/speaker";

export default function Index() {
  console.log(data)
  return (
    <div className="container speaker-list">
      {data?(
        data.map((profile)=>{
         return <SpeakerCard key={profile.id} profile={profile} />
        })
      ):<p>Data is empty</p>}
    </div>
  );
}
