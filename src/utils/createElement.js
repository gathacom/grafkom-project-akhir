import rough from "roughjs/bundled/rough.esm"; 
const generator = rough.generator();

export const createElement = (id, x1, y1, x2, y2, type, color) => {
    switch (type) {
      case "line":
      case "rectangle":
        const roughElement =
          type === "line"
            ? generator.line(x1, y1, x2, y2, { stroke: color })
            : generator.rectangle(x1, y1, x2 - x1, y2 - y1, { stroke: color });
        return { id, x1, y1, x2, y2, type, roughElement, color };
      case "pencil":
        return { id, type, points: [{ x: x1, y: y1 }], color };
      case "text":
        return { id, type, x1, y1, x2, y2, text: "", color };
      default:
        throw new Error(`Type not recognised: ${type}`);
    }
};