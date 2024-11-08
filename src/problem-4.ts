{
  // Problem 4:

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (shape: Shape) => {
    if (shape.shape === "circle") {
      const circleArea = Math.PI * shape.radius * shape.radius;
      return circleArea.toFixed(2);
    } else if (shape.shape === "rectangle") {
      return shape.width * shape.height;
    } else {
      return 0;
    }
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log("circleArea:", circleArea);
  console.log("rectangleArea:", rectangleArea);

  //
}
