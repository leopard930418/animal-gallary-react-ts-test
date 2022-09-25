import ActionBarComponent from "./ActionBarComponent";
import CalendarPicker from "./CalendarPicker";

export default function Test() {
  return (
    <div className="w-full">
      <div className="p-20">
        <CalendarPicker />
        <ActionBarComponent />
        {/* <DateTimePickerValidation name="meetingDT" /> */}
      </div>
    </div>
  );
}
