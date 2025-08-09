import {
  faBackwardStep,
  faForwardStep,
  faPlay,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../shared/Button";

export default function Controls() {
  return (
    <div className="flex w-4/12 justify-center items-center gap-4 flex-grow-1">
      {/* Button for shuffle */}
      <Button disabled icon={faShuffle} />

      <Button icon={faBackwardStep} />

      <Button icon={faPlay} />

      <Button icon={faForwardStep} />

      <Button disabled icon={faRepeat} />
    </div>
  );
}
