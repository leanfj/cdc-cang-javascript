import { Obrigatorio } from "../../util/index.js";

export function BindEvent(
  event = Obrigatorio("event"),
  selector = Obrigatorio("selector"),
  prevent = true
) {
  return function(target, propertyKey, descriptor) {
    Reflect.defineMetadata(
      "bindEvent",
      { event, selector, prevent, propertyKey },
      Object.getPrototypeOf(target),
      propertyKey
    );

    return descriptor;
  };
}
