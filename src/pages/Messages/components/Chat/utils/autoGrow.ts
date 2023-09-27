/**
 * Automatically resize textarea to fit content
 */
export default function autoGrow(element: HTMLTextAreaElement) {
  element.style.height = "1px";
  element.style.height = (element.scrollHeight) + "px";
}
