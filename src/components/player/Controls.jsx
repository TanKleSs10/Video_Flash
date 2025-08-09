import {
  faBackwardStep,
  faForwardStep,
  faPlay,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../shared/Button";
import Duration from "./Duration";

export default function Controls() {
  return (
    <div className="flex flex-wrap w-4/12 justify-center items-center gap-x-4 gap-y-2">
      {/* Button for shuffle */}
      <Button variant="control" disabled icon={faShuffle} />

      <Button variant="control" icon={faBackwardStep} />

      <Button variant="control" icon={faPlay} />

      <Button variant="control" icon={faForwardStep} />

      <Button variant="control" disabled icon={faRepeat} />

      <Duration />
    </div>
  );
}
