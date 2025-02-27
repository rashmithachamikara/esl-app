export default function TypographyDemo() {

    const demoStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "64px"
    }

    return (
    <div style={demoStyle}>
      <h1>Hello There H1</h1>
      <h2>Hello There H2</h2>
      <h3>Hello There H3</h3>
      <h4>Hello There H4</h4>
      <p>Hello There Paragraph</p>
      <p>Let's migrate to another approach later on. For now, use html tags. Styles are defined in css/typography.css and imported to root layout.tsx</p>
    </div>
  );
}
