import { HeadlessFluentProvider } from "@fluentui-contrib/react-headless-provider";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Button,
} from "@fluentui/react-components";

export default function Example() {
  // HeadlessFluentProvider is used to provide the context for Fluent UI components
  // This is necessary for components that rely on the Fluent UI context to function correctly
  // It allows the components to be used without the need for a full FluentProvider setup
  return (
    <HeadlessFluentProvider>
      <AccordionExample />
      <Button onClick={() => alert('It works')}>Example</Button>
    </HeadlessFluentProvider>
  );
}

const AccordionExample = () => (
  <Accordion>
    <AccordionItem value="1">
      <AccordionHeader>Accordion Header 1</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 1</div>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="2">
      <AccordionHeader>Accordion Header 2</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 2</div>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="3">
      <AccordionHeader>Accordion Header 3</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 3</div>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);
