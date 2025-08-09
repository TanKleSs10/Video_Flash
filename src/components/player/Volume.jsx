import InputRange from "../shared/InputRange";
import Button from "../shared/Button";
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";

export default function Volume() {
  return (
    <div className="hidden md:flex w-4/12 justify-end items-center gap-2">
      <Button variant="control" icon={faVolumeLow} />
      <InputRange size="md" />
    </div>
  );
}
