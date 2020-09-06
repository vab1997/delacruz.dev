import Button from "./button";

export default function HireButton({ text }) {
  function openCalendly(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    if (Calendly) {
      Calendly.initPopupWidget({ url: "https://calendly.com/danidelacruz/mentoring" });
      return false;
    } else {
      console.warn("Calendly is not available");
    }
  }

  return (
    <Button title="Contratar" data-tracking="hire-cta" href="/contact" onClick={openCalendly}>
      {text}
    </Button>
  );
}
