import {
  createDOMRenderer,
  type GriffelRenderer,
  RendererProvider,
  renderToStyleElements,
  SSRProvider,
} from "@fluentui/react-components";
import ReactDOMServer from "react-dom/server";

export function FluentSSRProvider({
  children,
  renderer = createDOMRenderer(),
}: {
  children: React.ReactNode;
  renderer?: GriffelRenderer;
}) {
  return (
    <RendererProvider renderer={renderer}>
      <SSRProvider>{children}</SSRProvider>
    </RendererProvider>
  );
}

export function extractSSRStyles(Component: React.ComponentType, props: any = {}) {
  const renderer = createDOMRenderer();

  // Render the component to a string to collect styles in the renderer
  ReactDOMServer.renderToString(
    <FluentSSRProvider renderer={renderer}>
      <Component {...props} />
    </FluentSSRProvider>
  );

  // Extract the styles from the renderer and return them as static markup
  // This will return a string of <style> elements that can be injected into the HTML
  return ReactDOMServer.renderToStaticMarkup(renderToStyleElements(renderer));
}
